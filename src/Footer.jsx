import React from 'react'
import logo from './assets/Logo-bg.png'
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='md:px-20  px-8 py-12 bg-black text-white '>
      <div className='flex justify-between  items-start gap-5 sm:gap-3 sm:flex-row  flex-wrap'>
        <div>
          <div className='w-[200px] flex flex-col gap-3'>
            <img src={logo} alt="" className=' sm:w-[150px] w-[100px] h-auto ' />
            <span className='sm:text-sm text-xs text-gray'>We provides a full range of interior design, architectural design.</span>
            <div className='flex gap-2'>
            <Link to="https://www.facebook.com/asiosglobal?mibextid=ZbWKwL" target="_blank" >  <FaFacebook className='w-auto h-[25px] text-gray hover:text-blue' /></Link> 
           <Link to="https://www.linkedin.com/company/asios-global/" target="_blank"> <FaLinkedin className='w-auto h-[25px] text-gray hover:text-blue' /></Link>   
         <Link to="https://www.youtube.com/@asiosglobal?si=u7CNidRQInNnPMWS" target="_blank"> <FaYoutube className='w-auto h-[25px] text-gray hover:text-blue' /></Link>     
            </div>
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <div className='font-[400] text-xl'>Quick Link</div>
          <div className='flex flex-col gap-2 items-start text-gray '>
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/product" className="hover:text-white">Products</Link>
            <Link to="/" className="hover:text-white">E-catalogue</Link>
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <div className='font-[400] text-xl'>Our Address</div>
          <div className='flex gap-2 items-start'>
            <IoLocationSharp className='w-auto sm:h-[25px] h-[20px] text-gray' />
            <div className='sm:w-[300px] w-full sm:text-sm text-xs text-gray'>Latest Ceramic Zone, 1st Floor, B/H Ishan Ceramic Zone 8-A, National Highway, Morbi, Gujarat
              363642</div>
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <div className='font-[400] text-xl'>Our Mailbox</div>
          <div className='flex gap-2 items-start'>
            <MdEmail className='w-auto h-[20px] text-gray' />
            <Link to='mailto:info@asios.in' className='w-[300px] sm:text-sm text-xs text-[#A3A3A3]'>info@asios.in</Link>
          </div>
          <div className='flex gap-2 items-start'>
            <FaPhoneAlt className='w-auto h-[20px] text-gray' />
            <Link to='tel:9998299800' className='w-[300px] sm:text-sm text-xs text-[#A3A3A3]'>+91 9998299800</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer