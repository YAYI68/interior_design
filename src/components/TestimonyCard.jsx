import Image from 'next/image'
import React from 'react'

function TestimonyCard({pic,name,location,description}) {
  return (
    <div className='w-[32%] flex flex-col gap-6 p-4 bg-white h-[20rem] rounded-[2rem]'>
                <div className='flex items-center gap-4'>
                    <div className='relative h-[5rem] w-[5rem] rounded-[50%] overflow-hidden'>
                        <Image src={pic} alt="Testimonies" fill />
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-[1.2rem]'>{name}</p>
                        <p>{location}</p>
                     </div>
                </div>
                    <p className='text-[1.2rem]'>
                      {description}
                    </p> 
              </div>
  )
}

export default TestimonyCard