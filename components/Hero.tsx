import React from 'react'
import  Link  from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi My Name is ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return(
        <div className='h-[95vh] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src={urlFor(pageInfo?.heroImage).url()}
            alt=''
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]' >{pageInfo?.role}</h2>
              <h1 className='text-2xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3' >{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
                </h1>  

                <div className='pt-5 '>
                <Link href="#about">
                <button className='heroButtonClass'>About</button>
                </Link>
                <Link href="#skills">
                <button className='heroButtonClass'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButtonClass'>Projects</button>
                </Link>                              
                </div>
            </div>
            
        </div>
    )
}