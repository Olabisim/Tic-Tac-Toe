'use client'

import { useEffect, useState } from "react";
import Square from "../components/Square";
import { Player } from "@/intefaces";
import { Button } from "./Button";
import Link from 'next/link'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Draw, WinAndLose } from "./GameStatus";

function calculateWinner(squares: Player[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if(
            squares[a] && squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}



interface recordsInterface {
    player1?: string,
    player2?: string,
    drawStatus?: boolean
}



function Board () {

    const [records, setRecords] = useState<recordsInterface[]>([])

    const [squares, setSquares] = useState(Array(9).fill(null))

    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
        Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
    )
    const [currentPlayerName, setCurrentPlayerName] = useState<[String, String]>(["Dotun", "Mikel"])

    const [winner, setWinner] = useState<Player >(null)

    
    const { firstPlayersName, secondPlayersName } = useSelector((state: RootState) => state.Players.playerNames)

    function reset() {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : 'O')
    }

    function setSquareValue(index:number) {
        const newData = squares.map((val, i) => {
            if(i === index) {
                return currentPlayer
            }

            return val;
        });

        setSquares(newData)
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X') 
    }

    

    useEffect(() => {
        const w = calculateWinner(squares)
        if(w) {
            setWinner(w);
        }
        if(!w && !squares.filter((square) => !square).length) {
            setWinner("Draw")
        }
    })

    useEffect(() => {

        if(winner && winner !== "Draw") {
            setRecords([{player1: winner === 'O' ? firstPlayersName : secondPlayersName, player2: winner !== 'O' ? firstPlayersName : secondPlayersName, drawStatus: false}, ...records ])
        }
        else if(winner && winner === "Draw") {
            setRecords([{player1: firstPlayersName, player2: secondPlayersName, drawStatus: true}, ...records ])
        }
    }, [winner])

    return (
        <div>
            <br />
            <span className="pt-16 mt-10 text-[24px]">
                    
                {!winner && <p>Hey <span className="font-bold text-[#D4AF37]">{currentPlayer === 'O' && firstPlayersName}</span>  <span className="font-bold text-[#000080]">{currentPlayer === 'X' && secondPlayersName}</span> , it's your turn </p>}

                {winner && winner !== "Draw" && <p>Congratulations <span className="font-bold"> {winner === 'O' ? firstPlayersName : secondPlayersName} !!!</span></p>}

                {winner && winner === "Draw" &&  <p> <span className="font-bold"> {firstPlayersName} and {secondPlayersName}</span> draws</p>}

            </span>

            <div className="grid">
                {Array(9).fill(null).map((_, i) => {
                    return <Square 
                                winner={winner}
                                key={i}
                                onClick={() => setSquareValue(i)}
                                value={squares[i]}
                            />
                })}
            </div>

            <div className="pt-4">

                {/* <Button text="reset" onClick={reset} /> */}
                <span className="pr-3">
                    <Button text="Continue" onClick={reset} />
                </span>
                <Link href="/">
                    <Button text="Stop"  />
                </Link>
            </div>

            <br />
            <br />

            <div>

                {records.map((e, i) => (
                    <div className="my-4">

                        <span>{i +1}</span>
                        {
                            e.drawStatus 
                            ?
                            <Draw name1={e.player1} name2={e.player2} />
                            :
                            <WinAndLose name1={e.player1} name2={e.player2} />
                        }
                        
                    </div>
                ))}
            </div>
             
        </div>
    )
}

export default Board;