
import Header from '@/components/Header'
import './globals.css'
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
        </body>
    </html>
  )
}
