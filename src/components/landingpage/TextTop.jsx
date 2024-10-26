import React from 'react'

function TextTop({texts=[],paragraph}) {
  return (
    <div className='w-full mt-72'>
        {texts.map((para, index)=>
            <p className='sm:text-3xl text-[0.96rem] font-medium ' key={index}>{para}</p>
        )}
        <p>{paragraph}</p>
    </div>
  )
}

export default TextTop