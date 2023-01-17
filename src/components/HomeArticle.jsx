import { Dm_Serif } from '@/utils/font'
import React from 'react'
import Article from './Article'
import articleImg1 from '/public/images/img6.png';
import articleImg2 from '/public/images/img7.png';
import articleImg3 from '/public/images/img8.png';

function HomeArticle() {
  return (
    <section className='mt-[5rem] flex flex-col items-center gap-[2rem]'>
      <div className='w-[60%] text-center'>
        <p className='text-[2.5rem]' style={Dm_Serif.style}>Articles & News</p>
        <p className='text-[1.2rem]'>
          It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div className='w-full flex flex-wrap gap-2'>
        <Article 
          image={articleImg1}
          category={'Kitchan Design'}
          title={'Let’s Get Solution For Building Construction Work'}
          date={'26 December,2022'}
        />
         <Article 
          image={articleImg2}
          category={'Living Design'}
          title={'Low Cost Latest Invented Interior Designing Ideas.'}
          date={'22 December,2022 '}
        />
         <Article 
          image={articleImg3}
          category={'Interior Design'}
          title={'Best For Any Office & Business Interior Solution'}
          date={'25 December,2022 '}
        />
      </div>
    </section>
  )
}

export default HomeArticle