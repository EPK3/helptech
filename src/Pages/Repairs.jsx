import React from 'react'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import repair from '../img/repair.webp'
import somethingWrong from '../img/something_wrong.webp'
import computerLogo from '../img/computer-logo.webp'
import helpComputer from '../img/help-computer.webp'

const Repairs = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar/>
        <div className='flex flex-wrap justify-center z-0'>
            <div className='flex flex-col md:flex-row my-10 md:my-20'>
                <div className='text-white text-center md:text-right m-auto md:mr-0 md:w-1/2'>
                    <h1 className='text-4xl lg:text-8xl m-5 mt-0'>Fast, Reliable & Affordable Repairs</h1>
                    <h2 className='text-xl md:text-2xl m-10'>Your gadgets play a major role in your professional, personal and school life.</h2>
                    <h3 className='text-md md:text-baseline m-5'>When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in. With over a decade of experience in the electronics repair industry, HelpTech can get the job done quickly and effectively.</h3>
                </div>
                <div className='m-auto md:ml-0'>
                    <img src={repair} alt='Something went wrong...' className='w-[400px] rounded-full'/>
                </div>
            </div>
            <div>
                <div className='flex flex-col md:flex-row flex-wrap bg-slate rounded-lg w-[400px] lg:w-[1000px] my-32 mx-auto justify-center align-middle'>
                    <div className='lg:w-[40%] my-10 mx-5 lg:mx-auto'>
                        <h1 className='text-white text-center underline text-4xl'>Repairs</h1>
                        <h2 className='text-cyan text-xl my-5'>Diagnosis & Repair</h2>
                        <p className='text-white'>Is your computer or tablet broken, or won't start? Our repair experts at HelpTech will diagnose what's wrong and make all necessary repairs.</p>
                        <h2 className='text-cyan text-xl my-5'>Virus & Spyware Removal</h2>
                        <p className='text-white'>Computer programs running slowly? Seeing unwanted ads and pop-up windows? Your device may be infected with viruses or spyware. We have the expertise to get things running cleanly again.</p>
                    </div>
                    <div className='lg:w-[45%]  m-auto'>
                        <img src={somethingWrong} alt='Something went wrong..' className='w-[500px] rounded-lg'/>
                    </div>                
                </div>
                <div className='flex flex-col md:flex-row flex-wrap bg-slate rounded-lg w-[400px] lg:w-[1000px] my-32 mx-auto justify-center align-middle'>
                    <div className='lg:w-[45%]  m-auto'>
                        <img src={computerLogo} alt='Something went wrong..' className='w-[500px] rounded-lg'/>
                    </div> 
                    <div className='lg:w-[40%] my-10 mx-5 lg:mx-auto'>
                        <h1 className='text-white text-center underline text-4xl'>Setup & Installation</h1>
                        <h2 className='text-cyan text-xl my-5'>Home Wi-Fi Setup</h2>
                        <p className='text-white'>Need Wi-Fi at your new home? Or maybe your current internet and streaming services are running slowly? We can diagnose issues and do what's necessary to give you a faster wireless network.</p>
                        <h2 className='text-cyan text-xl my-5'>Device Setup</h2>
                        <p className='text-white'>Get started the right way. We'll set up a new device, including a PC, tablet, mobile or networkable device, or up to five wireless devices.</p>
                    </div>               
                </div>
                <div className='flex flex-col md:flex-row flex-wrap bg-slate rounded-lg w-[400px] lg:w-[1000px] my-32 mx-auto justify-center align-middle'>
                    <div className='lg:w-[40%] my-10 mx-5 lg:mx-auto'>
                        <h1 className='text-white text-center text-4xl'>Getting help is easy!</h1>
                        <p className='text-white text-center my-5'>Your gadgets play a major role in your professional, personal and school life. When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in.</p>
                        <h2 className='text-white text-2xl my-5 text-center'>Contact HelpTech today for all your PC and Phone repair needs.</h2>
                        <p className='text-white text-center text-lg m-auto w-40 py-3 rounded-full bg-cyan  hover:bg-blue hover:scale-110 cursor-pointer'>Contact Now</p>
                    </div>
                    <div className='lg:w-[45%]  m-auto'>
                        <img src={helpComputer} alt='Something went wrong..' className='w-[500px] rounded-lg'/>
                    </div>                
                </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Repairs