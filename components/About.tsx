import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center lg:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl' >About</h3> 
       <motion.img
       initial={{ x: -200, opacity: 0 }}
       transition={{duration: 1.2}}
       whileInView={{ x:0, opacity: 1 }}
       src={urlFor(pageInfo?.profilePic).url()}
       alt=''
       className='mt-14 -mb-20 md:mt-0 lg:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:-mb-40 md:w-64 md:h-72 xl:pt-20 xl:w-[500px] xl:h-[550px]'
       />
        <div className='space-y-5 px-0 md:px-10'>
            <h4 className='text-2xl md:text-4xl font-semibold' >Here is a <span className='underline decoration-[#F7AB0A]/50' >little</span> background</h4>
            <p className='text-base text-center' >{pageInfo?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}