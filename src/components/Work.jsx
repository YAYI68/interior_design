import React from 'react'
import SingleWork from './SingleWork'
import ClickButton from './ui/ClickButton'

const Work = () => {
  return (
    <section className='w-full flex mt-[5rem] '>
       <SingleWork 
         title={"Project Plan"}
         description={"There are many variations of the passages of lorem Ipsum from available, majority."} 
        />
         <SingleWork 
         title={"Interior Work"}
         description={"There are many variations of the passages of lorem Ipsum from available, majority."} 
        />
          <SingleWork 
         title={"Retail Design"}
         description={"There are many variations of the passages of lorem Ipsum from available, majority."} 
        />
    </section>
  )
}

export default Work