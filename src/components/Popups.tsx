
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { changePopupStatus, setPlayerNames } from '@/redux/PlayersSlice'
import { AppDispatch } from "@/redux/store";

export const HomePagePopup = ({children}:any) => {
    
    const {register, handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    })

    let dispatch = useDispatch<AppDispatch>()
    

    let handleClick = () => {
        
    } 

    let onSubmit222 = (data:any) => {

        console.log("onSubmit")

        console.log("data[0]")
        console.log(data.firstName)
        console.log("data[1]")
        console.log(data.lastName)
        // router.push('/play')
        dispatch(changePopupStatus(false))
        console.log("this isi the object")
        console.log({firstName: data.firstName, lastName:data.lastName})
        dispatch(setPlayerNames({firstName: data.firstName, lastName:data.lastName}))

        // .firstName;
        //     state.playerNames.firstPlayersName = payload.secondName;


    }

    return(
        <div className='flex items-center justify-center h-full'>
            <div className='bg-[#fff] w-[300px] h-[340px] rounded p-4 px-6'>
                {children}
    
                <div className=' mb-6'>
                <form onSubmit={handleSubmit(onSubmit222)}>
                    <br />
                    <label className='pt-4 font-medium'>Enter First Player Name</label>
                    <input 
                        className='bg-[#ccc]/[0.5] rounded w-full my-2 py-4 px-6'
                        {...register('firstName')}
                        required
                    />
                    <div className='pt-4'></div>
                    <label className='pt-4 font-medium'>Enter Second Player Name</label>
                    <input 
                        className='bg-[#ccc]/[0.5] rounded w-full my-2 py-4 px-6 mb-6'
                        {...register('lastName')}
                        required
                    />
                    {/* <Link href="/play"> */}
                    
                        <Button text="Start" />
                    {/* </Link> */}
    
                </form>
                    
                </div>
    
            </div>
        </div>

    )
}
    