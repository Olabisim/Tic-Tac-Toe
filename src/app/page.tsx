'use client'

import { Draw, WinAndLose } from '@/components/GameStatus'
// import Image from 'next/image'
import {Button} from '../components/Button'

export default function Home() {

  let handleClick = () => {} 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button text="Start New Game" onClick={handleClick} />
        <div>
          <div>
            <WinAndLose name1="Player 1" name2='Player 2'  />
          </div>

          <div>
            <Draw name1="Player 1" name2='Player 2' />
          </div>

        </div>
    </main>
  )
}
