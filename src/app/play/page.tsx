'use client'


import Board from "@/components/Board"
import { HomePagePopup } from "@/components/Popups"
import { RootState } from "@/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"


const Play = ( ) => {

    
  const [popup, setPopup] = useState<boolean>(true)

  
    
  const { popupStatus } = useSelector((state:RootState):any => state.Players)
  console.log("state")
  // console.log(playerState)


    return (
        <>
            <div className="mt-10">
                <br />
                <br />

            </div>
            {popupStatus && <div className=''>
            <div className='absolute left-0 top-0 bg-[#000]/[0.8] h-full w-full'>
                <HomePagePopup >
                    {/* <div onClick={() => setPopup(false)} className='text-right font-bold text-[#DC143C] pb-2 border-b-4 mb-7 hover:cursor-pointer'>close</div> */}
                </HomePagePopup>
            </div>
            </div>
            }

            <div className="flex item-center justify-center ">
                <div>
                    <Board />
                </div>
            </div>
        
        </>
        
    )
}

export default Play