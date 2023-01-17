import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

function ClickButton({title, iconColor,textColor, bgColor}) {
  return (
    <button type="" className={`flex gap-3 items-center mt-[1rem] py-3 px-[2rem] rounded-lg`}  style={{backgroundColor:bgColor}}>
        <span className={`text-white]`} style={{color:textColor}}>{title}</span>
        <HiArrowRight className={`fill-[${iconColor}] h-5 w-5`} />
       </button>
  )
}

export default ClickButton