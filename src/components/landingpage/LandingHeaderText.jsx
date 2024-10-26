import React from 'react'

function LandingHeaderText({headerText}) {
  return (
    <div className='my-10 sm:mb-32 sm:mt-14'>
        {headerText.map((texts,index)=> (
            <h1 className='text-7xl sm:text-[15rem] tracking-tighter leading-none' key={index}>{texts}</h1>
        ))}
    </div>
  )
}

export default LandingHeaderText