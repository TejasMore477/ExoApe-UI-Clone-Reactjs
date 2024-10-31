import React from 'react'
import IntroTitle from '../work/IntroTitle'
import Browse from '../work/Browse'
import { motion } from 'framer-motion'

function SpreadNews() {
  const content = ["spread", "the News"]
  return (
    <div className='w-full flex flex-col items-center justify-center text-center  px-5 sm:px-10 pb-20'>
      <IntroTitle text="In The Media"/>
        {content.map((line, index)=>(
                <h1 key={index} className='text-7xl py-2 sm:text-[9rem] sm:w-1/2 sm:font-semibold leading-none tracking-tight sm:pb-8 -my-1 sm:-mt-4 overflow-hidden'>
                <motion.span 
                className='inline-block origin-left'
                initial={{y:'100%',opacity:0,rotate:30}}
                whileInView={{y:0, rotate:0, opacity:1}}
                viewport={{once:true}}
                transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: index*0.2}}>
                  {line}
                </motion.span>
              </h1>
        ))}
      <p className='tracking-tight text-lg mt-5 sm:mt-5'>Find out more about our work on these leading design and technology platforms.</p>
      <Browse text="Browse All News" position="center"/>
    </div>
  )
}

export default SpreadNews