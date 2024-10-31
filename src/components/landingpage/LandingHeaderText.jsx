import React from 'react'
import { motion } from 'framer-motion'

function LandingHeaderText({headerText}) {
  return (
    <div className='my-10 sm:mb-32 sm:mt-14'>
        {headerText.map((texts,index)=> (
            <h1 className='text-7xl sm:text-[15rem] tracking-tighter leading-none overflow-hidden py-10 -mt-[4.5rem] -mb-[3rem]' key={index}>
              <motion.span 
              className='inline-block origin-left'
              initial={{opacity:0, rotate:90,y:'100%'}}
              animate={{opacity:1, rotate:0, y:0}}
              transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: 1+index*.15}}>
                {texts}
              </motion.span>
            </h1>
        ))}
    </div>
  )
}

export default LandingHeaderText