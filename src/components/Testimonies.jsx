import React from 'react'
import Image from 'next/image';
import pic1 from "/public/images/photo/testimonies1.jpg"
import pic2 from "/public/images/photo/testimonies2.jpg"
import pic3 from "/public/images/photo/testimonies3.jpg"
import { Dm_Serif } from '@/utils/font';
import TestimonyCard from './TestimonyCard';
function Testimonies() {
  return (
    <section className='w-full mt-[5rem] '>
        <div className='w-full  bg-[#F4F0EC] rounded-[5rem] px-[2rem] py-[3rem] flex flex-col items-center '>
            <div className='w-[50%]'>
             <p className='text-[2.5rem] text-center' style={Dm_Serif.style}>
                What the People Thinks
                About Us
            </p>      
            </div>
            <div className='w-full mt-[1rem] flex gap-4 '>
              <TestimonyCard
                pic={pic1}
                name={'Nattasha Mith'}
                location={'Sydney, USA'}
                description={'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.'}
              />
                 <TestimonyCard
                pic={pic2}
                name={'Raymond Galario'}
                location={'Sydney, Australia'}
                description={'Lorem Ipsum is simply dummy text of the typesetting industry.Ipsum has been scrambled it to make a type book.'}
              />
                 <TestimonyCard
                pic={pic3}
                name={'Benny Roll'}
                location={'Sydney, USA'}
                description={'Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.'}
              />
            </div>
        </div>
    </section>
  )
}

export default Testimonies