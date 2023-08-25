'use client'

import { Draw, WinAndLose } from '@/components/GameStatus'
import Image from 'next/image'
import {Button} from '../components/Button'
import Link from 'next/link'

export default function Home() {

  let handleClick = () => {

  } 

  return (
    <main className="flex flex-col items-center ">


        <div className='pt-10 pb-5'>
          
          <Image 
              src="/../../arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
        </div>
        <Link href="/play">
            <Button text="Start New Game" />
        </Link>
        <div className='pt-16'>
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
