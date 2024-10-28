import React from 'react'
import IntroTitle from '../work/IntroTitle'
import Browse from '../work/Browse'

function SpreadNews() {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center  px-5 sm:px-10 py-10'>
      <IntroTitle text="In The Media"/>
      <h1 className='text-7xl py-10  sm:text-[10rem] w-1/2 sm:font-semibold leading-none tracking-tight'>Spread the News</h1>
      <p className='pb-10 tracking-tight text-lg'>Find out more about our work on these leading design and technology platforms.</p>
      <Browse text="Browse All News" position="center"/>
    </div>
  )
}

export default SpreadNews