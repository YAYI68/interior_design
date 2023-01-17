"use client"
import { Dm_Serif } from '@/utils/font'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import RoundedIcon from './ui/RoundedIcon'



function Article({image,title,category,date}) {
    const [hover,setHover] = useState(false)


  return (
    <div onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)} className={`cursor-pointer w-[32%] h-[30rem] rounded-[5rem] p-4 ${hover?'bg-[#F4F0EC]':''} border`}>
        <div className='w-full h-full rounded-[5rem] overflow-hidden'>
            <div className='w-full h-[60%] relative'>
                <Image src={image} alt={title} fill  />
                <p className='p-2 bg-white absolute bottom-5 left-5 rounded-tr-[5px] rounded-tl-[5px] rounded-br-[5px]'>{category}</p>
            </div>
            <div className='w-full h-[40%] flex flex-col gap-2 '>
               <p className='text-[1.5rem]' style={Dm_Serif.style}>{title}</p> 
            <div className='flex justify-between items-center'>
             <p>{date}</p>
              <RoundedIcon bgColor={hover?'#FFFFFF':'#F4F0EC'} width={'2.8rem'} height={'2.8rem'}>
                <IoIosArrowForward className='h-5 w-5' />
               </RoundedIcon>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Article