import React from 'react'
import Browse from '../work/Browse'
import video from '/src/assets/videos/footerVideo.mp4'

function Footer() {
  return (
    <div className='w-full px-5 sm:px-20 py-10 bg-[#070707] h-[80vh] sm:h-screen text-white'>
        <div className='flex w-full items-center h-[15vh] sm:h-fit justify-between my-5'> 
            <h1 className='sm:text-[10rem] z-20 text-7xl w-[45%] tracking-tighter leading-none'>Our Story</h1>
            <div className='w-[55%] sm:w-[80%] h-full overflow-hidden '>
                <video autoPlay loop muted className='w-full h-full scale-[1.6] sm:scale-[1]' src={video}></video>
            </div>
        </div>
        <p className='py-3 w-full'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
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