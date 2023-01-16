import Image from 'next/image'
import React from 'react'
import { DM_Serif_Display } from '@next/font/google'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

const Dm_Serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
})

export default function Header() {
  return (
    <header className="h-[6.25rem] w-full flex items-center justify-center ">
        <nav className='w-[70%] h-[60%]  flex items-center justify-between'>
          <div id="logo" className='w-[20%] flex items-center gap-2'>
             <Image src={'/images/Logo.png'} width={34} height={34} alt="logo" />
             <p className='text-[40px] ' style={Dm_Serif.style}>Interno</p>
          </div>
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
