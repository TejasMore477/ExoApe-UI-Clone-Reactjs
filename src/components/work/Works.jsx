import React from 'react'
import { motion } from 'framer-motion'
import i1 from '/src/assets/images/i1.webp'
import i2 from '/src/assets/images/i2.webp'
import i3 from '/src/assets/images/i3.webp'
import i4 from '/src/assets/images/i4.webp'
import v1 from '/src/assets/videos/v1.mp4'
import v2 from '/src/assets/videos/v2.mp4'
import v3 from '/src/assets/videos/v3.mp4'
import v4 from '/src/assets/videos/v4.mp4'

function Works() {
    const data = [
        {heading:"Amaterasu", subHeading:"Frontier Health Innovation", image:i1, video:v1},
        {heading:"Columbia Pictures", subHeading:"Celebrating a Century of Cinema", image:i2, video:v2},
        {heading:"Cambium", subHeading:"Pioneering Sustainable Solutions", image:i3, video:v3},
        {heading:"Studio D", subHeading:"Urban and Landscape Design", image:i4, video:v4},
    ]
  return (
    <div className='sm:flex items-start justify-center flex-wrap gap-20 mt-20'>
        {data.map((item, index)=>(
            <div className={`w-full sm:w-fit mt-10 sm:mt-0  ${index%2 != 0 && "sm:pt-[20rem]"}`} key={index} >
                    <div
                    className={`sm:w-[38rem] w-full h-96 sm:h-[45rem] ${index%2 != 0 && " sm:h-[35rem] sm:w-[25rem]"} mt-10 sm:mt-0 relative overflow-hidden`}>
                        <motion.img 
                        data-scroll
                        data-scroll-speed="-0.2"
                        initial={{opacity:1}}
                        whileHover={{opacity:0}}
                        transition={{ease:[0.22, 1, 0.36, 1], duration:1.5}}
                        className='hidden sm:block z-30 w-full h-full object-cover' src={item.image} alt={item.heading} />

                        <video 
                        muted loop autoPlay className='absolute z-[-10] sm:top-0 sm:left-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-x-0 sm:-translate-y-0 scale-[1]' src={item.video}></video>
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-sm sm:text-xl font-bold sm:font-medium'>
                            <motion.span 
                            className='inline-block origin-left'
                            initial={{y:'100%',opacity:0,rotate:10}}
                            whileInView={{y:0, rotate:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: 1}}>
                                {item.heading}
                            </motion.span>
                        </h3>
                        <h3 className='text-sm sm:text-lg sm:font-light text-zinc-500'>
                        <motion.span 
                            className='inline-block origin-left'
                            initial={{y:'100%',opacity:0,rotate:10}}
                            whileInView={{y:0, rotate:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{ease:[0.22, 1, 0.36, 1], duration:1.5, delay: 1}}>
                               {item.subHeading}
                            </motion.span></h3>
                    </div>
            </div>
        ))}
        
    </div>
  )
}

export default Works
