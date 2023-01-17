import { Dm_Serif } from '@/utils/font'
import React from 'react'
import Project from './Project';
import projectPic1 from '/public/images/img2.png';
import projectPic2 from '/public/images/img3.png';
import projectPic3 from '/public/images/img4.png';
import projectPic4 from '/public/images/img5.png'

Dm_Serif
function HomeProject() {
  return (
    <section className='mt-[5rem] flex flex-col items-center gap-[2rem]'>
      <div className='w-[60%] text-center'>
        <p className='text-[2.5rem]' style={Dm_Serif.style}>Follow Our Projects</p>
        <p className='text-[1.2rem]'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>
      <div className='w-full flex justify-between flex-wrap gap-6'>
        <Project image={projectPic1} title={'Modern Kitchan'} curve={'rounded-tr-[5rem]'} />
        <Project image={projectPic2} title={'Modern Kitchan'} curve={'rounded-tl-[5rem]'} />
        <Project image={projectPic3} title={'Modern Kitchan'} curve={'rounded-br-[5rem]'} />
        <Project image={projectPic4} title={'Modern Kitchan'} curve={'rounded-bl-[5rem]'} />
      </div>
    </section>
  )
}

export default HomeProject