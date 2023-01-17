import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import HomeHeader from '@/components/HomeHeader'
import Work from '@/components/Work'
import HomeAbout from '@/components/HomeAbout'
import Testimonies from '@/components/Testimonies'
import HomeProject from '@/components/HomeProject'
import HomeScores from '@/components/HomeScores'
import HomeArticle from '@/components/HomeArticle'
import HomeContact from '@/components/HomeContact'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full flex-col flex items-center justify-center'>
      <HomeHeader />
      <div className='w-[70%]'>
      <Work />
      <HomeAbout />
      <Testimonies />
      <HomeProject />
      </div>
      <HomeScores/>
      <div className='w-[70%]'>
       <HomeArticle />
       <HomeContact />
       <Footer />
      </div>
    </main>
  )
}
