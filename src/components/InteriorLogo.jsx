import { Dm_Serif } from '@/utils/font'
import Image from 'next/image'
import React from 'react'
import Logo from "/public//images/Logo.png"



function InteriorLogo() {
  return (
    <div id="logo" className='w-[20%] flex items-center gap-2'>
    <Image src={Logo} width={34} height={34} alt="logo" />
    <p className='text-[40px] ' style={Dm_Serif.style}>Interno</p>
 </div>
  )
}

export default InteriorLogo