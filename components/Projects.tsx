import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'
import Link from 'next/link'
type Props = {
  projects: Project[]
}

export default function Projects({projects}: Props) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen relative flex overflow-hidden 
    flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl'>Projects</h3>

      <div className='relative mt-10 mg:mt-20 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        {/*Projects*/}
        {projects.map((project, i)=> (
          <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex
          flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '>
            <motion.img
            initial={{y: -300, opacity: 0}}
             whileInView={{opacity:1, y:0}} 
             transition={{duration:1.2}}
             viewport={{ once: true }}
            src={urlFor(project?.image).url()}
            alt=''
            className='w-[100%] md:w-[90%] lg:w-[50%]'
            />
            <div className='space-y-4 lg:space-y-8 px-0 md:px-10 max-w-6xl'>
              <Link href={project?.linkToBuild}>
              <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}:</span>{" "}{project?.title} </h4>
              </Link>
            <div className='flex items-center space-x-4 justify-center'>
              {project?.technologies.map(tech => (
                <img 
                className='w-10 h-10 rounded-lg'
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt=""
                />
              ))}
              </div>

              <p className='text-xl text-center '>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>


       <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 
       left-0 h-[400px] -skew-y-12'/>
    </motion.div>
  )
}