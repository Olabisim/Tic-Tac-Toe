

import Link from 'next/link'
import '../app/globals.css'

const Nav = () => {
    return (
        <div className="py-8 px-7 md:px-32 bg-[#D4AF37] flex">
            <div className="flex justify-between w-full">

                <Link href="/"><h2 className="font-bold">TIC TAC TOE</h2></Link>
                <p className="border-b-2 border-black pb-1">New Game</p>
            </div>
        </div>
    )
}

export {Nav};