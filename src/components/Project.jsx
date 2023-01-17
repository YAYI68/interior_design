import Image from 'next/image'
import React from 'react'
import RoundedIcon from './ui/RoundedIcon';
import { IoIosArrowForward } from "react-icons/io";

function Project({curve,image,title}) {
  return (
    <div className='w-[45%] flex flex-col gap-4 '>
     <div className={`h-[30rem] w-full relative ${curve} overflow-hidden`}>
        <Image src={image} alt={title} fill />
     </div>
     <div className='flex justify-between'>
        <div className='flex flex-col '>
          <p>{title}</p>
          <p>Decor / Artchitecture</p>
        </div>
        <RoundedIcon bgColor={'#F4F0EC'} width={'3rem'} height={'3rem'}>
            <IoIosArrowForward className='h-5 w-5' />
        </RoundedIcon>
     </div>
    </div>
  )
}

export default Project