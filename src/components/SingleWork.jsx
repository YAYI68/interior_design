import { Dm_Serif } from '@/utils/font'
import React from 'react'
import ClickButton from './ui/ClickButton'



function SingleWork({title, description}) {
  return (
    <div className='w-[33%]  px-[1.5rem] py-[2rem] rounded-[.5rem] flex flex-col items-center hover:bg-[#F4F0EC]'>
            <h3 className='text-[1.5rem]' style={Dm_Serif.style}>{title}</h3>
            <p className='text-[20px] text-center'>
               {description}
            </p>
            <ClickButton title={'Read More'} iconColor={'#CDA274'} bgColor={'transparent'} textColor={'black'} />
        </div>
  )
}

export default SingleWork