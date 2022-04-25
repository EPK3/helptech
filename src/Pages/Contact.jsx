import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex my-20 z-0'>
            <div className='flex flex-col xl:flex-row flex-wrap justify-center m-auto'>
                <div className='bg-cyan w-[350px] md:w-[400px] lg:w-[800px] xl:w-[400px] p-10 mx-1 xl:mx-0'>
                    <h1 className='text-white text-2xl mb-5'>Contact Information</h1>
                    <h2 className='text-white mb-5'>Our IT Professionals can set up your new computer, phone or tablet, and diagnose and repair any problems that arise. Now serving all of Bucks and Montgomery County.</h2>
                    <div className='inline-flex text-white align-middle mb-2 hover:opacity-80 cursor-pointer'>
                        <FontAwesomeIcon icon={faPhoneSquare} className='text-2xl'/>
                        <p className='mx-2'>(123)456-7890</p>
                    </div>
                    <div className='basis-full'></div>
                    <div className='inline-flex text-white align-middle mb-2 hover:opacity-80 cursor-pointer'>
                        <FontAwesomeIcon icon={faEnvelopeSquare} className='text-2xl'/>
                        <p className='mx-2 '>info@helptech.com</p>
                    </div>
                    <div className='flex justify-center my-10 mx-auto text-white'>
                        <FontAwesomeIcon icon={faFacebook} className='text-3xl mx-5 hover:opacity-80 cursor-pointer'/>
                        <FontAwesomeIcon icon={faInstagram} className='text-3xl mx-5 hover:opacity-80 cursor-pointer'/>
                        <FontAwesomeIcon icon={faYoutube} className='text-3xl mx-5 hover:opacity-80 cursor-pointer'/>
                        <FontAwesomeIcon icon={faTiktok} className='text-3xl mx-5 hover:opacity-80 cursor-pointer'/>
                    </div>
                </div>
                <div className='w-[350px] md:w-[400px] lg:w-[800px] xl:w-[1000px] bg-slate p-7 lg:p-10 mx-1 xl:mx-0'>
                    <h1 className='basis-full text-white text-3xl mb-5'>Send us a message</h1>
                    <div className='inline-flex flex-col lg:flex-row flex-wrap gap-5 justify-center'>
                        <div>
                            <label for='fname' className='text-white'>First Name</label>
                            <div className='basis-full m-2'></div>
                            <input type='text' id='fname' className='bg-offWhite placeholder-black w-[300px] md:w-[350px] xl:w-[450px] h-10 text-lg p-2 outline-none rounded-sm'/>
                        </div>
                        <div>
                            <label for='fname' className='text-white'>Last Name</label>
                            <div className='basis-full m-2'></div>
                            <input type='text' id='lname' className='bg-offWhite placeholder-black w-[300px] md:w-[350px] xl:w-[450px] h-10 text-lg p-2 outline-none rounded-sm'/>
                        </div>
                        <div>
                            <label for='fname' className='text-white'>Email</label>
                            <div className='basis-full m-2'></div>
                            <input type='text' id='email' className='bg-offWhite placeholder-black w-[300px] md:w-[350px] xl:w-[450px] h-10 text-lg p-2 outline-none rounded-sm'/>
                        </div>
                        <div>
                            <label for='fname' className='text-white'>Phone</label>
                            <div className='basis-full m-2'></div>
                            <input type='text' id='phone' placeholder='Optional' className='bg-offWhite placeholder-black w-[300px] md:w-[350px] xl:w-[450px] h-10 text-lg p-2 outline-none rounded-sm'/>
                        </div>
                        <div>
                            <label for='fname' className='text-white'>Message</label>
                            <div className='basis-full m-2'></div>
                            <textarea id='fname' placeholder='Max. 500 Characters' className='bg-offWhite placeholder-black w-[300px] md:w-[350px] lg:w-[720px] xl:w-[920px] h-56 text-lg p-2 outline-none rounded-sm'/>
                        </div>
                        <div className='flex xl:w-[920px] justify-center lg:justify-end mt-4'>
                            <h2 className='text-white text-center w-40 py-3 rounded-full bg-cyan hover:ease-in-out hover:bg-blue hover:scale-110 cursor-pointer'>Submit</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Contact