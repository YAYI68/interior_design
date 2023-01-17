
import React from 'react';
import ClickButton from './ui/ClickButton';
import { Dm_Serif } from '@/utils/font';


function HomeHeader() {
  return (
    <div className='h-[40rem] w-full bg-home rounded-bl-[25%] bg-cover bg-center bg-no-repeat relative '>
       <div className='w-[30%] absolute top-[25%] left-[20%]'>
        <h2 className='text-[4rem]' style={Dm_Serif.style} >Let Your Home Be Unique</h2>
        <p className='text-[1.2rem]'>There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
        <ClickButton title={'Get Started'} iconColor={'#CDA274'} bgColor={'black'} textColor={'white'} />
       </div>
    </div>
  )
}

export default HomeHeader