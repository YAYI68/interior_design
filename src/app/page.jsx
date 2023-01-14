import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <h1 className='text-[yellow] font-bold text-[5rem]'>Hello World</h1>
    </main>
  )
}
