import React from 'react'
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
            <div className={`w-full sm:w-fit mt-10 sm:mt-0  ${index%2 != 0 && "sm:pt-[20rem]"}`} key={index}>
                    <div className={`sm:w-[38rem] w-full h-96 sm:h-[45rem] ${index%2 != 0 && " sm:h-[35rem] sm:w-[25rem]"} mt-10 sm:mt-0 relative overflow-hidden`}>
                        <img className='hidden sm:block w-full h-full object-cover' src={item.image} alt={item.heading} />
                        <video muted loop autoPlay className='absolute sm:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  scale-[1]' src={item.video}></video>
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-sm sm:text-xl font-bold sm:font-medium'>{item.heading}</h3>
                        <h3 className='text-sm sm:text-lg sm:font-light text-zinc-500'>{item.subHeading}</h3>
                    </div>
            </div>
        ))}
        
    </div>
  )
}

export default Works
