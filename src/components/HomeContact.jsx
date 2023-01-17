import { Dm_Serif } from '@/utils/font'
import React from 'react'
import ClickButton from './ui/ClickButton'

function HomeContact() {
  return (
    <section className='mt-[5rem] py-[3rem] flex justify-center items-center bg-black rounded-[3rem] w-full'>
     <div className='w-[50%] text-center text-white flex flex-col items-center'>
       <h3 className='text-[2.5rem] text-white' style={Dm_Serif.style}>Wanna join the interno?</h3>
       <p>It is a long established fact  will be distracted.</p>
       <ClickButton 
         title={'Contact With Us'}
         bgColor={'#CDA274'}
         iconColor={'black'}
         textColor={'white'}
       />
     </div>
    </section>
  )
}

export default HomeContact