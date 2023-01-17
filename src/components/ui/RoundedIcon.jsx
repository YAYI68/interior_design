import React from 'react'

function RoundedIcon({children, width, height, bgColor}) {
  return (
    <div className='flex items-center justify-center' style={{
        height,
        width,
        borderRadius:'50%',
        backgroundColor:bgColor
    }}>
      {children}
    </div>
  )
}

export default RoundedIcon