import React, { useRef, useState }  from 'react'
import { useDetectOutsideClick } from './useDetectOutsideClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faBars, faAddressBook, faComputer, faHome, faTools } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/logo-main.webp'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const dropDownMenu = () => setIsActive(!isActive);

  return (
    <div>
      <div className='inline-flex bg-slate w-full m-0 p-0 items-center justify-between'>
        <div className='inline-flex flex-1 mx-5'>
          <FontAwesomeIcon icon={faBars} className='justify-self-end text-2xl text-cyan cursor-pointer' onClick={dropDownMenu} />   
        </div>
        <Link to='/helptech'>
          <div className='flex flex-1 justify-center'>
            <img className='w-40 m-auto cursor-pointer' src={logo} alt='something went wrong..'/>
          </div>
        </Link>
        <div className='flex flex-1 justify-end'>
          <p className='text-white my-2.5 text-[0px] md:text-base lg:text-lg cursor-pointer'>(123)456-7890</p>
          <FontAwesomeIcon icon={faPhoneSquare} className='m-2.5 mr-5 text-3xl text-cyan cursor-pointer'/>
        </div>
      </div>
      <div className={`flex justify-end h-screen border-r-2 border-b-2 border-slate absolute menu ${isActive ? 'active' : 'inactive'}`} ref={ dropdownRef }>
        <div className='block z-3 w-96 bg-black p-9 text-4xl text-white'>
            <Link to='/helptech'>
              <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                  <FontAwesomeIcon icon={faHome} className='text-cyan'/>
                  <h1 className='mx-2 self-center'>Home</h1>
              </div>
            </Link>
            <div className='basis-full'></div>
            <Link to='/repairs'>
              <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faTools} className='text-cyan'/>
                <h1 className='mx-2'>Repairs</h1>
              </div>
            </Link>
            <div className='basis-full'></div>
            <Link to='/services'>
              <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faComputer} className='text-cyan'/>
                <h1 className='mx-2'>Services</h1>
              </div>
            </Link>
            <div className='basis-full'></div>
            <Link to='/contact'>
              <div className=' inline-flex m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faAddressBook} className='text-cyan'/>
                <h1 className='mx-2'>Contact</h1>
              </div>
            </Link>
            <div className='flex justify-center m-28 cursor-pointer text-5xl'>
              <FontAwesomeIcon icon={faFacebook} className='mx-5 hover:scale-125 hover:text-cyan'/>
              <FontAwesomeIcon icon={faInstagram} className='mx-5 hover:scale-125 hover:text-cyan'/>
              <FontAwesomeIcon icon={faYoutube} className='mx-5 hover:scale-125 hover:text-cyan'/>
              <FontAwesomeIcon icon={faTiktok} className='mx-5 hover:scale-125 hover:text-cyan'/>
            </div>
        </div>
      </div>
    </div>
  )
}



export default Navbar