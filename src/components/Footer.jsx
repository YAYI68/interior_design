import Link from 'next/link'
import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin,FaInstagram } from 'react-icons/fa'
import InteriorLogo from './InteriorLogo'

function Footer() {
  return (
    <footer className='mt-[5rem] w-full flex flex-col gap-4 items-center'>
        <div className='w-full flex item-center '>
          <div className="w-[35%] flex flex-col gap-2">
            <InteriorLogo />
            <div className="my-[.5rem] flex flex-col gap-4">
              <p>It is a long established fact that a reader will be distracted lookings.</p>
              <div className='w-[50%] flex justify-between items-center'>
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaTwitter />
                </button>
                <button>
                  <FaLinkedin />
                </button>
                <button>
                  <FaInstagram />
                </button>
              </div>
            </div>
          </div>
          <div className='w-[15%] flex flex-col'>
            <p className='text-[1.5rem] font-semibold'>Pages</p>
            <ul>
                <li className='my-[.5rem]'>
                  <Link href={'/'} >About Us</Link>  
                </li>
                <li className='my-[.5rem]'>
                    <Link href={'/'}>Our Project</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}>Our Team</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}>Contact Us</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}> Services</Link> 
                </li>
            </ul>
          </div>
          <div className='w-[15%] flex flex-col'>
          <p className='text-[1.5rem] font-semibold'> Services</p> 
            <ul >
                <li className='my-[.5rem]'>
                  <Link href={'/'} >Kitchen</Link>  
                </li>
                <li className='my-[.5rem]'>
                    <Link href={'/'}>Living Area</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}>Bathroom</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}>Dinning Hall</Link>
                </li>
                <li className='my-[.5rem]'>
                   <Link href={'/'}>Bedroom</Link> 
                </li>
            </ul>
          </div>
          <div className="w-[35%] flex flex-col gap-2">
            <p className='text-[1.5rem] font-semibold'>Contact Us</p> 
            <div className="my-[.5rem] flex flex-col gap-4">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201 </p>
              <p> contact@interno.com</p>
              <p>(123) 456 - 7890 </p>
            </div>
          </div>
        </div>
        <div className='w-[50%] text-center'>
          <p>Copyright © Interno | Designed by Yayi</p>     
        </div>
    </footer>
  )
}

export default Footer