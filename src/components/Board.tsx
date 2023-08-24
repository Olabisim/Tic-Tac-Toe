'use client'

import { useEffect, useState } from "react";
import Square from "../components/Square";
import { Player } from "@/intefaces";
import { Button } from "./Button";

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

        console.log("squares[a]")
        console.log(squares[a])
        console.log("squares[b]")
        console.log(squares[b])
        console.log("squares[c]")
        console.log(squares[c])
        console.log("squares[a] && squares[a] === squares[b]")
        console.log(`${squares[a]} && ${squares[a]} === ${squares[b]}`)
        console.log("squares[a] === squares[c]")
        console.log(`${squares[a]} === ${squares[c]}`)

        if(
            squares[a] && squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}





function Board () {

    const [squares, setSquares] = useState(Array(9).fill(null))

    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
        Math.round(Math.random() * 1) === 1 ? 'X' : 'O'
    )
    const [currentPlayerName, setCurrentPlayerName] = useState<[String, String]>(["Dotun", "Mikel"])

    const [winner, setWinner] = useState<Player>(null)

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

    return (
        <div>

            {!winner && <p>Hey {currentPlayer === 'O' ? currentPlayerName[0] : currentPlayerName[1]}, it's your turn </p>}

            {winner && winner !== "Draw" && <p>Congratulations {winner === 'O' ? currentPlayerName[0] : currentPlayerName[1]}</p>}
            {winner && winner === "Draw" &&  <p> {currentPlayerName[0]} and {currentPlayerName[1]} draws</p>}


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

                <Button text="reset" onClick={reset} />
                <Button text="Continue" onClick={reset} />
                <Button text="Stop" onClick={reset} />
            </div>
             
        </div>
    )
}

export default Board;