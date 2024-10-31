import React from 'react'
import image from '/src/assets/background-image.webp'
import TextTop from './TextTop'
import LandingHeaderText from './LandingHeaderText'
import TextBottom from './TextBottom'

function LandingPage() {
  const text1 = [
    "Global digital design studio partnering with ",
    "brands and businesses that create exceptional ",
    "experiences where people live, work, and unwind.",
  ]

  const headerText = ["Digital", "Design", "Experience"]
  const text2 = ['We help experience-driven companies','thrive by making their audience feel the','refined intricacies of their brand and product','in the digital space. Unforgettable journeys start with a click.']
  return (
    <div className='w-full h-[150vh] sm:h-[250vh] relative'>
        <div className='w-full h-full overflow-hidden'>
            <img
            data-scroll
            data-scroll-speed="-1" 
            src={image} className='w-full h-full object-cover object-center' />
        </div>
        <div className='absolute top-0 px-5 sm:px-32 text-white'>
        <TextTop texts={text1}/>
        <LandingHeaderText headerText={headerText}/>
        <TextBottom paragraph={text2}/>
        
        <div className='sm:flex items-start justify-between sm:mt-32 mt-10'>
        <a href="#" className='border-b-2 border-zinc-100 pb-2 inline-block mt-10 sm:text-xl text-[0.96rem] font-medium '>The Studio</a>
        <div className=' hidden sm:flex items-end justify-between w-1/4 '>
        <div className='flex flex-col items-start gap-5'>
        {["Work", "Studio","News", "Contact"].map((link, index)=>(
          <a key={index} href='#' className='block font-medium text-lg'>{link}</a>
        ))}
        </div>
        <div className='flex flex-col items-end gap-5'>
          <p className='font-medium text-lg'>hello@exoape.com</p>
          <p className='font-medium text-lg'>+31772086200</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage