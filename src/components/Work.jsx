import React from 'react'
import ClickButton from './ui/ClickButton'

const Work = () => {
  return (
    <section className='w-full flex mt-[5rem] '>
        <div className='w-[33%]  px-[1.5rem] py-4  flex flex-col items-center'>
            <p className='text-[22px] text-center'>
                There are many variations of the passages of lorem Ipsum from 
                available, majority.
            </p>
            <ClickButton title={'Read More'} iconColor={'#CDA274'} bgColor={'transparent'} textColor={'black'} />
        </div>
        <div className='w-[33%]   px-[1.5rem] py-4  flex flex-col items-center'>
            <p className='text-[22px] text-center'>
                There are many variations of the passages of lorem Ipsum from 
                available, majority.
            </p>
            <ClickButton title={'Read More'} iconColor={'#CDA274'} bgColor={'transparent'} textColor={'black'} />
        </div>
        <div className='w-[33%]   px-[1.5rem] py-4  flex flex-col items-center'>
            <p className='text-[22px] text-center'>
                There are many variations of the passages of lorem Ipsum from 
                available, majority.
            </p>
            <ClickButton title={'Read More'} iconColor={'#CDA274'} bgColor={'transparent'} textColor={'black'} />
        </div>
    </section>
  )
}

export default Work