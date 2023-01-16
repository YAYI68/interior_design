import React from 'react';
import { DM_Serif_Display } from '@next/font/google';
import { HiArrowRight } from "react-icons/hi2";


const Dm_Serif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
})

function HomeHeader() {
  return (
    <div className='h-[40rem] w-full bg-home rounded-bl-[25%] bg-cover bg-center bg-no-repeat relative '>
       <div className='w-[30%] absolute top-[25%] left-[20%]'>
        <h2 className='text-[4rem]' style={Dm_Serif.style} >Let Your Home Be Unique</h2>
        <p className='text-[1.2rem]'>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
       <button type="" className='flex gap-3 items-center mt-[1rem] bg-black py-3 px-[3rem] rounded-lg'>
        <span className='text-white'>Get Started</span>
        <HiArrowRight className='fill-[#CDA274] h-5 w-5' />
       </button>
       </div>
    </div>
  )
}

export default HomeHeader