import PageHeader from '@/components/PageHeader'
import ServiesWork from '@/components/ServiesWork';
import React from 'react'
import headerPic from '/public/images/services/service_header.jpg';

function page() {
  return (
    <main className='w-full flex-col flex items-center justify-center'>
          <PageHeader image={headerPic} name={"services"} />
          <div className='w-[70%]'>
           <ServiesWork />
          </div>

    </main>
  )
}

export default page