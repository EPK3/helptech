import { faAddressBook, faComputer, faHome, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

const Dropdown = () => {
const dropdownRef = useRef(null);
const [isActive, setIsActive] = useState(false);
 
return (
    <div className='flex justify-end h-screen'>
        <div className='block z-50 relative w-96 bg-cyan p-9 text-4xl text-slate'>
            <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faHome} className=''/>
                <h1 className='font-bold mx-2 self-center'>Home</h1>
            </div>
            <div className='basis-full'></div>
            <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faTools}/>
                <h1 className='font-bold mx-2'>Repairs</h1>
            </div>
            <div className='basis-full'></div>
            <div className=' inline-flex items-center m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faComputer}/>
                <h1 className='self-center font-bold mx-2'>Services</h1>
            </div>
            <div className='basis-full'></div>
            <div className=' inline-flex m-auto mb-9 cursor-pointer hover:scale-125'>
                <FontAwesomeIcon icon={faAddressBook}/>
                <h1 className='font-bold mx-2'>Contact</h1>
            </div>
        </div>
    </div>
  )
}

export default Dropdown