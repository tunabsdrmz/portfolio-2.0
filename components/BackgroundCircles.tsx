import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{
        scale: [1, 2, 2, 3, 1], 
        opacity:[0.4, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }} 
    transition={{duration:2.5}} 
    className='relative flex items-center justify-center mt-64'>
        <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full w-[275px] h-[275px] mt-52' />
        <div className='absolute border border-[#333333] rounded-full w-[400px] h-[400px] mt-52'/>
        <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full w-[600px] h-[600px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full w-[750px] h-[750px] mt-52 '/>
    </motion.div>
  )
}

