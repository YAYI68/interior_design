import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import InteriorLogo from './InteriorLogo';



export default function Header() {
  return (
    <header className="h-[6.25rem] w-full flex items-center justify-center ">
        <nav className='w-[70%] h-[60%]  flex items-center justify-between'>
          <InteriorLogo />
          <ul className='w-[45%] h-[50%] flex items-center gap-4'>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Home</Link>
             </li>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Pages</Link>
             </li>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Services</Link>
             </li>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Project</Link>
             </li>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Blog</Link>
             </li>
             <li>
              <Link href={'/'} className='text-[1.2rem] font-[400] text-center'>Contact</Link>
             </li>
             <button type="">
              <CiSearch  className='h-5 w-5'/>
             </button>
           </ul>
        </nav>
    </header>
  )
}
