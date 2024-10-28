import React from 'react'

function Browse({text, position, pos="center"}) {
  return (
    <div className={`w-full flex items-center justify-${pos} sm:justify-${position} gap-3 text-center pt-10`}>
        <a className='w-2 h-2 rounded-full border-zinc-500 border-[2px] cursor-pointer'></a>
        <a className='font-normal cursor-pointer border-b-[1px] sm:text-xl border-black'>{text}</a>
    </div>
  )
}

export default Browse