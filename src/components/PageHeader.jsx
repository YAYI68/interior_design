import { Dm_Serif } from '@/utils/font';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


function PageHeader({image,name}) {
  return (
    <div className='w-full'>
         <div className='w-full bg-red-700 h-[20rem] relative overflow-hidden'>
            <Image src={image} alt="Services"  fill  />
            <div className='h-[8rem] w-[20%] flex flex-col items-center justify-center gap-1 bg-white rounded-[10px] translate-y-2 absolute left-1/2 bottom-0 -translate-x-1/2'>
               <h3 className="text-[2.5rem] capitalize" style={Dm_Serif.style}>{name}</h3>
               <ul className='flex list-none items-center gap-2'>
                 <li >
                    <Link href={'/'} className="hover:underline">Home</Link>
                 </li>
                 <span>/</span>
                 <li>
                    <Link href={`/${name}`} className="hover:underline capitalize">{name}</Link>
                 </li>
               </ul>
            </div>
         </div>
    </div>
  )
}

export default PageHeader