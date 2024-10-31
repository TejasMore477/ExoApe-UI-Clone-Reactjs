import React from 'react'
import { motion } from 'framer-motion'

function TextTop({texts=[]}) {
  return (
    <div className='w-full mt-72'>
        {texts.map((para, index)=>
            <p className='sm:text-3xl text-[0.96rem] font-medium overflow-hidden' key={index}>
              <motion.span 
              className='inline-block origin-left'
              initial={{opacity:0, rotate:90, y:90}}
              animate={{opacity:1, rotate:0, y:0}}
              transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: index*.15}}>
                {para}
              </motion.span>
              </p>
        )}
    </div>
  )
}

export default TextTop