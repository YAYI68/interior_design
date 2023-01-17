import React from 'react'
import { BsTelephone } from "react-icons/bs";
import RoundedIcon from './ui/RoundedIcon';
import ClickButton from './ui/ClickButton';
import Image from 'next/image';
import AboutImage from '/public/images/img1.jpg';
import { Dm_Serif } from '@/utils/font';

function HomeAbout() {
  return (
    <section className='flex  w-full mt-[5rem] p-2'>
       <div className=' w-[45%]  flex flex-col py-4 gap-3 px-2'>
         <div className='w-[70%]'>
            <p className='text-[2.3rem]' style={Dm_Serif.style}>
             We Create The Art
             Of Stylish Living
             Stylishly
            </p>
         </div> 
         <p className='w-[80%] text-[1.3rem] '>It is a long established fact that a reader will be distracted by the of readable content of a page 
           when lookings at its layouts the points of using 
          that it has a more-or-less normal.
        </p>
        <div className='w-[50%] flex items-center gap-3'>
         <RoundedIcon bgColor={' #F4F0EC'} width={'5rem'} height={'5rem'}>
           <BsTelephone className='h-6 w-6 fill-[#CDA274]' />
         </RoundedIcon>
         <div className='flex flex-col'>
            <p className='font-semibold text-[1.2rem]'>012345678</p>
            <p>Call Us Anytime</p>
         </div>
        </div>
        <div className='w-[50%]'>
         <ClickButton title={'Get Free Estimate'} iconColor={'#CDA274'} bgColor={'black'} textColor={'white'} />  
        </div>   
       </div>
       <div className=' w-[55%]  '>
        <div className='w-full rounded-tr-[25%]  h-full overflow-hidden rounded-bl-[10%] relative'>
            <Image src={AboutImage} alt="About Image"  fill placeholder='blur'  />
        </div>
       </div>
    </section>
  )
}

export default HomeAbout