import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-[20rem] flex items-center justify-center'>
      <div className='w-[70%] bg-red-500 h-[50rem]'>
        
      </div>
    </main>
  )
}
