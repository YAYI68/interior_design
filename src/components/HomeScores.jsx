import { Dm_Serif } from '@/utils/font'
import React from 'react'
Dm_Serif
function HomeScores() {
  return (
     <section className='mt-[5rem] w-full'>
        <div className='w-full  bg-[#F4F0EC] py-[2rem] flex items-center justify-center'>
            <div className='w-[70%] flex p-[2rem] items-center '>
              <div className='border-r-[1px] border-r-[#CDA274] flex flex-col px-4 text-center w-[24%]'>
               <h3 className='text-[5rem] text-[#CDA274]' style={Dm_Serif.style}>12</h3>
               <p>Years Of Experiance</p>
              </div> 
              <div className='border-r-[1px] border-r-[#CDA274] flex flex-col px-4 text-center w-[24%]'>
               <h3 className='text-[5rem] text-[#CDA274]' style={Dm_Serif.style}>85</h3>
               <p>Success Project</p>
              </div> 
              <div className='border-r-[1px] border-r-[#CDA274] flex flex-col px-4 text-center w-[24%]'>
               <h3 className='text-[5rem] text-[#CDA274]' style={Dm_Serif.style}>15</h3>
               <p>Active Project</p>
              </div> 
              <div className=' flex flex-col px-4 text-center w-[24%]'>
               <h3 className='text-[5rem] text-[#CDA274]' style={Dm_Serif.style}>95</h3>
               <p>Happy CUstomers</p>
              </div> 
            </div>
        </div>
     </section>
  )
}

export default HomeScores