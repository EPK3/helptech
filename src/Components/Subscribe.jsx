import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex flex-col bg-[#0D0F11] justify-center align-middle text-center z-0'>
        <h1 className='text-white text-2xl md:text-4xl mt-10 md:mt-20 md:mb-3'>Keep In Touch</h1>
        <h1 className='inline-flex text-white text-2xl md:text-6xl m-auto'><p className='text-cyan mr-2 md:mr-3'>Subscribe </p>to our Newsletter!</h1>
        <input type= 'text' placeholder='Your Email' className='flex m-auto h-12 my-5 md:my-10 text-xl w-80 md:w-[600px] lg:w-[800px] xl:w-4/12 px-2 bg-offWhite placeholder-black rounded-sm outline-none'/>
        <h2 className='text-white text-lg m-auto mb-20 w-40 py-3 rounded-full bg-cyan hover:ease-in-out hover:bg-blue hover:scale-110 cursor-pointer'>Subscribe</h2>
    </div>
  )
}

export default Subscribe