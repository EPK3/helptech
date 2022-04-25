import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='flex bg-slate justify-center align-middle text-4xl text-white'>
        <FontAwesomeIcon icon={faFacebook} className='m-5 cursor-pointer hover:text-cyan hover:scale-110'/>
        <FontAwesomeIcon icon={faInstagram} className='m-5 cursor-pointer hover:text-cyan hover:scale-110'/>
        <FontAwesomeIcon icon={faYoutube} className='m-5 cursor-pointer hover:text-cyan hover:scale-110'/>
        <FontAwesomeIcon icon={faTiktok} className='m-5 cursor-pointer hover:text-cyan hover:scale-110'/>
    </div>
  )
}

export default Footer