import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import serviceImg from '../img/service.webp'
import { faShoppingCart, faSackDollar, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex flex-wrap justify-center z-0'>
            <div className='flex flex-col md:flex-row my-10 md:my-20'>
                <div className='text-white text-center md:text-right m-auto md:mr-0 md:w-1/2'>
                    <h1 className='text-4xl lg:text-8xl m-5 mt-0'>Buy, Sell, Trade</h1>
                    <h2 className='text-xl md:text-2xl m-10'>Don’t want to fix your phone? Just want the latest gadget? Buy. Sell. Trade up.</h2>
                    <h3 className='text-md md:text-baseline m-5'>Do you have a phone graveyard in your junk drawer? An old tablet, e-reader, or music player that’s just taking up your valuable storage space? We are here to help you turn those old devices into cash on the spot!</h3>
                </div>
                <div className='m-auto md:ml-0'>
                    <img src={serviceImg} alt='Something went wrong...' className='w-[400px] rounded-full'/>
                </div>
            </div>
            <div className='flex flex-row justify-center flex-wrap mx-5 my-20 gap-10 lg:gap-20 text-center'>
                <div className='flex-1 bg-slate rounded-lg max-w-[500px] min-w-[300px]'>
                    <FontAwesomeIcon icon={faShoppingCart} className='text-[200px] text-cyan m-10'/>
                    <h1 className='text-white text-6xl mb-10'>Buy a Phone</h1>
                    <h2 className='text-grey text-xl mb-10 mx-5'>Browse our selection of expertly refurbished cell phones and find the one that fits you and your budget or call us.</h2>
                </div>
                <div className='flex-1 bg-slate rounded-lg max-w-[500px] min-w-[300px]'>
                    <FontAwesomeIcon icon={faSackDollar} className='text-[200px] text-cyan m-10'/>
                    <h1 className='text-white text-6xl mb-10'>Sell Your Phone</h1>
                    <h2 className='text-grey text-xl mb-10 mx-5'>With IT Phone & Pc Repair Shop Now you have a place where you can actually get cash for your old phone – Get cash on the spot.</h2>
                </div>
                <div className='flex-1 bg-slate rounded-lg max-w-[500px] min-w-[300px]'>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className='text-[200px] text-cyan m-10'/>
                    <h1 className='text-white text-6xl mb-10'>Trade Your Phone</h1>
                    <h2 className='text-grey text-xl mb-10 mx-5'>If your phone is outdated, trade up. If your phone is too complicated, trade down. With IT Phone & Pc Repair’s trade program, the choices are yours.</h2>
                </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Services
