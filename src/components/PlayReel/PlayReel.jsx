import React from 'react'
import IntroTitle from '../work/IntroTitle'
import playreel from '/src/assets/videos/playreel.mp4'

function PlayReel() {
  return (
    // relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    // w-[30%] h-[40%]--initaly w-[60%] h-full--finaly
    // justify-between -- finaly 
    <div className='w-full px-0 sm:px-10 h-screen py-24 sm:pt-24 sm:pb-10 flex flex-col items-center justify-between text-white bg-black'>
        <IntroTitle text="Work In Motion"/>
        <div className='w-full relative h-[10rem] sm:h-[70vh] flex items-center justify-between'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[40%] sm:h-[50%] overflow-hidden'>
                <video autoPlay loop muted className='w-full h-full scale-[1.6]' src={playreel}></video>
            </div>
            <div className='flex items-center justify-center sm:justify-between sm:px-20 w-full gap-20'>
            <h1 className='text-[2.6rem] sm:text-[10rem] z-[999] leading-none tracking-tight font-normal'>Play</h1>
            <h1 className='text-[2.6rem] sm:text-[10rem] z-[999] leading-none tracking-tight font-normal'>Reel</h1>
            </div>
        </div>
        <p className='text-center sm:text-lg px-5 z-[999]'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
    </div>
  ) 
}

export default PlayReel