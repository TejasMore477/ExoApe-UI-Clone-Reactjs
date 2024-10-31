import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

import image1 from '/src/assets/images/image1Imagesection.webp'
import image2 from '/src/assets/images/image2Imagesection.webp'
import image3 from '/src/assets/images/image3ImageSection.webp'

import video1 from '/src/assets/videos/video1ImagesSection.mp4'
import video2 from '/src/assets/videos/video2ImageSection.mp4'
import SpreadNews from './SpreadNews'

function ImagesSec() {
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const forth = useRef(null)
    const mother = useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: mother.current,
                start:"0 90",
                scrub:1,
            }
        });
        tl.to(first.current,{
            x:'40%',
            ease:[0.5, 0, 0.75, 0],
        }, 'b');
        tl.to(second.current,{
            x:'-40%',
            ease:[0.5, 0, 0.75, 0],
        }, 'b');
        tl.to(third.current,{
            x:'-40%',
            ease:[0.5, 0, 0.75, 0],
        }, 'b');
        tl.to(forth.current,{
            x:'40%',
            ease:[0.5, 0, 0.75, 0],
        }, 'b');
    })

  return (
    <div
    data-scroll
    data-scroll-speed='-0.2' >
        <div
        ref={mother} 
        className='px-5 sm:px-20 h-[60vh] sm:h-[150vh] py-32 sm:py-44 w-full flex overflow-x-hidden items-center justify-center'>
        <div className='w-[45%] h-[15rem] sm:h-[85vh] sm:w-[30%] relative'>
            <div ref={first} className='absolute w-20 h-32 sm:h-[45vh] sm:w-[60%] -right-14 sm:-right-36 -top-10 sm:-top-[25%]'>
                <img className='w-full h-full object-cover' src={image3} alt="" />
            </div>
            <div ref={second} className='absolute aspect-video w-24 h-16 sm:h-[35vh] sm:w-[110%] -left-14 sm:-left-[80%] top-14 overflow-hidden'>
                <video autoPlay muted loop className='w-full h-full scale-[1.5]' src={video1}></video>
            </div>
            <div ref={third} className='absolute aspect-video w-32 h-20 sm:h-[30vh] sm:w-[90%] -left-20 sm:-left-[85%] -bottom-5 sm:-bottom-[20%]'>
                <img className='w-full h-full object-cover' src={image1} alt="" />
            </div>
            <div ref={forth} className='absolute w-16 h-24 sm:h-[45vh] sm:w-[80%] -right-7 sm:-right-[70%] -bottom-14 sm:-bottom-[20%] overflow-hidden'>
                <video autoPlay muted loop className='w-full h-full scale-[1.5]' src={video2}></video>
            </div>
            <img 
            className='w-full h-full object-cover' src={image2} alt="" />
        </div>
    </div>
    <SpreadNews/>
    </div>
  )
}

export default ImagesSec