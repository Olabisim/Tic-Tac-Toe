'use client'

import { Nav } from '@/layout/Nav'
import { Providers } from '../redux/provider'



export const Prelayout = ({children}:any) => (

    <Providers>
        <Nav />
        <div>
            {children}  
        </div>
    </Providers>
)