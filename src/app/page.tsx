'use client'

import { Draw, WinAndLose } from '@/components/GameStatus'
import Image from 'next/image'
import {Button} from '../components/Button'
import { useState } from 'react'
import { HomePagePopup } from '@/components/Popups'

export default function Home() {

  const [popup, setPopup] = useState<boolean>(false)

 
  let handleClick = () => {

  } 


  return (
    <main className="flex flex-col items-center ">


        {popup && <div className=''>
          <div className='absolute left-0 top-0 bg-[#000]/[0.8] h-full w-full'>
              <HomePagePopup >
                <div onClick={() => setPopup(false)} className='text-right font-bold text-[#DC143C] pb-2 border-b-4 mb-7 hover:cursor-pointer'>close</div>
              </HomePagePopup>
          </div>
        </div>
        }

        
        <div className='pt-10 pb-5'>
          
          <Image 
              src="/../../arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
        </div>
        <Button text="Start New Game" onClick={() => setPopup(true)} />
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
