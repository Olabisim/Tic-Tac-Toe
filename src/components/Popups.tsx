
import { useForm } from 'react-hook-form'
import { Button } from './Button'
import Link from 'next/link'

export const HomePagePopup = ({children}:any) => {
    
    const {register, handleSubmit} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    })
    
    let handleClick = () => {
        
    } 

    let onSubmit = (data:any) => {
        console.log("data")
        console.log(data)
    }

    return(
        <div className='flex items-center justify-center h-full'>
            <div className='bg-[#fff] w-[300px] h-[400px] rounded p-4 px-6'>
                {children}
    
                <div className=' mb-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
    
                    <label className='pt-4 font-medium'>First Player Name</label>
                    <input 
                        className='bg-[#ccc]/[0.5] rounded w-full my-2 py-4 px-6'
                        {...register('firstName')}
                        required
                    />
                    <div className='pt-4'></div>
                    <label className='pt-4 font-medium'>Second Player Name</label>
                    <input 
                        className='bg-[#ccc]/[0.5] rounded w-full my-2 py-4 px-6 mb-6'
                        {...register('lastName')}
                        required
                    />
                    <Link href="/play">
                    
                     <Button text="Start" />
                    </Link>
    
                </form>
                    
                </div>
    
            </div>
        </div>

    )
}
    