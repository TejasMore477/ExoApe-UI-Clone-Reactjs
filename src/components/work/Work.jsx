import React from 'react'
import Works from './Works'
import IntroTitle from './IntroTitle'
import Browse from './Browse'
import { motion } from 'framer-motion'

function Work() {
  return (
    <div className='px-5 sm:px-20 py-10 sm:py-20 w-full overflow-x-hidden'>
      <IntroTitle text="Featured Projects"/>
        <h1 className='sm:pb-5 py-5  font-normal sm:text-[13rem] sm:font-semibold text-7xl  tracking-tighter leading-none overflow-hidden'>
        <motion.span 
              className='inline-block origin-left'
              initial={{y:'100%',opacity:0,rotate:30}}
              whileInView={{y:0, rotate:0, opacity:1}}
              viewport={{once:true}}
              transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: 0.8}}>
                Work
              </motion.span>
        </h1>
        <p className='tracking-tight '>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
        <Works/>
        <Browse text="Browse All Work" position="end"/>
    </div>
  )
}

export default Work