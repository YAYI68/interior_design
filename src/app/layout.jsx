
import Header from '@/components/Header'
import './globals.css'
import HomeHeader from '@/components/HomeHeader'
import Footer from '@/components/Footer'
// import "./output.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <>
        {children}
        </>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-[70%]'>
           <Footer />
          </div>
        </div>
        </body>
    </html>
  )
}
