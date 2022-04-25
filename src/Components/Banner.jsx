import React from 'react'
import cover from '../img/home-cover.webp'

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url('${cover}')` }} className="flex bg-cover bg-bottom brightness-50 w-full h-[95vh] justify-center align-center z-0">
        <div className='flex flex-col justify-center text-center text-shadow'>
            <h1 className= 'text-white text-7xl md:text-9xl lg:text-[200px] animate-blurFadeIn'>HelpTech</h1>
            <div className='h-0 border border-grey w-[300px] md:w-[500px] lg:w-[800px] mx-auto mt-4 md:mt-6 lg:mt-9 opacity-40 animate-blurFadeIn'></div>
            <h2 className='text-white text-lg md:text-4xl lg:text-6xl animate-blurFadeIn2'>We'll keep your computer running like new.</h2>
        </div>
    </div>
  )
}

export default Banner