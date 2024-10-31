import React from 'react'
import Browse from '../work/Browse'
import video from '/src/assets/videos/footerVideo.mp4'
import { motion } from 'framer-motion'

function Footer() {
    const story = ["Our", "Story"]
  return (
    <div 
    data-scroll
    className='w-full px-5 sm:px-20 py-10 bg-[#070707] h-[80vh] sm:h-[101vh] text-white'>
        <div className='flex w-full items-center h-[15vh] sm:h-fit justify-between sm:my-0 my-5'> 
            <div className='w-[45%]'>
            {story.map((words, index)=>(
                <h1 key={index} className='sm:text-[10rem] z-20 text-7xl w-full tracking-tighter leading-none sm:-my-16 -my-8 overflow-hidden sm:py-5 py-3 '>
                <motion.span 
                className='inline-block origin-left'
                initial={{y:'100%',opacity:0,rotate:30}}
                whileInView={{y:0, rotate:0, opacity:1}}
                viewport={{once:true}}
                transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: index*0.2}}>
                  {words}
                </motion.span>
              </h1>
        ))}
            </div>
            <div className='w-[55%] sm:w-[80%] h-full overflow-hidden '>
                <video autoPlay loop muted className='w-full h-full scale-[1.6] sm:scale-[1]' src={video}></video>
            </div>
        </div>
        <p className='py-3 pt-8 w-full'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
        <Browse text="Our Story" position="start" pos="start"/>
        <div className='w-full h-[1px] bg-zinc-500 my-5'></div>
        <div className='flex items-center justify-start gap-24 mt-5'>
            <div className='flex flex-col items-start justify-center gap-2'>
                {["Work","Studio","News","Contact"].map((link, index)=>(
                    <a key={index} href='#'>{link}</a>
                ))}
            </div>
            <div className='flex flex-col items-start justify-center gap-2'>
                {["Behance","Dribble","Twitter","Instagram"].map((link, index)=>(
                    <a key={index} href='#'>{link}</a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer