import React from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Subscribe from '../Components/Subscribe'
import phone from '../img/hand_phone.webp'
import laptop from '../img/laptop.webp'
import tablet from '../img/tablet.webp'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner/>
        <div className='m-14 flex flex-col justify-center align-middle text-center z-0'>
            <h1 className='text-white my-2 lg:m-10 text-4xl lg:text-6xl'>Southeastern PA's <p className='text-cyan text-5xl lg:text-9xl'>Best Choice</p> For Your Computer Repair and IT Needs!</h1>
            <h2 className='text-grey my-5 lg:m-10 lg:text-3xl'>Our IT Professionals can set up your new computer, phone or tablet, and diagnose and repair any problems that arise. Now serving all of Bucks and Montgomery County.</h2>
        </div>
        <div className='flex flex-wrap justify-center my-10 flex-col lg:flex-row'>
            <div className='flex-1 justify-center m-5'>
                <img src={laptop} alt='Something went wrong...' className='w-[400px] bg-slate rounded-full m-auto'/>
            </div>
            <div className='flex-1 justify-center m-5'>
                <img src={phone} alt='Something went wrong...' className='w-[400px] bg-slate rounded-full m-auto'/>
            </div>
            <div className='flex-1 justify-center m-5'>
                <img src={tablet} alt='Something went wrong...' className='w-[400px] bg-slate rounded-full m-auto'/>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Home