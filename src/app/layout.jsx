
import Header from '@/components/Header'
import './globals.css'
import HomeHeader from '@/components/HomeHeader'
// import "./output.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <HomeHeader />
        <>
        {children}
        </>
        </body>
    </html>
  )
}
