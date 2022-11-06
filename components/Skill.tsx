import React from 'react'
import { motion } from "framer-motion"
import { Skill as Skilll } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    skilll: Skilll
    directionLeft?: boolean
}

export default function Skill({directionLeft, skilll}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial={{x: directionLeft ? -200 : 200, opacity:0}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        className='rounded-full border border-gray-500 
        object-cover w-[65px] h-[65px] md:w-[75px] md:h-[75px] lg:h-[90px] lg:w-[90px] filter 
        group-hover:grayscale transition duration-300 ease-in-out'
        src={urlFor(skilll?.image).url()}
        alt=''
        />
        
        
    </div>
  )
}