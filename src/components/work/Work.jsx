import React from 'react'
import Works from './Works'

function Work() {
  return (
    <div className='px-5 sm:px-20 py-10 sm:py-20 w-full overflow-x-hidden'>
        <h1 className='sm:pb-5 py-5  font-normal sm:text-[13rem] sm:font-semibold text-7xl  tracking-tighter leading-none'>Work</h1>
        <p className='tracking-tight '>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
        <Works/>
        <div className='w-full flex items-center justify-center gap-3 text-center pt-24'>
            <a className='w-2 h-2 rounded-full border-zinc-500 border-[2px] cursor-pointer'></a>
            <a className='font-normal cursor-pointer border-b-[1px] sm:text-xl border-black'>Browse All Works</a>
        </div>
    </div>
  )
}

export default Work