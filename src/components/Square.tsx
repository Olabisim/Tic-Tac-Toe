
'use client'

import { Player } from "@/intefaces";



function Square (
    {value, onClick, winner}: 
    {winner: Player, value: Player, onClick: () => void}) 
    {

    if(!value) { return <button className="square"  onClick={onClick} disabled={Boolean(winner)} /> }

    return (
        <button disabled className={`square square_${value.toLocaleLowerCase()} leading-3 font-light`}> 
            
            {value}
            
        </button>
    )
}

export default Square;