import { Metadata } from 'next'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Womazing - магазин женской одежды',
  description: 'Интернет магазин женской одежды',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <Header/>
          <main>
           {children}  
          </main>
        <Footer/>
      </body>
    </html>
  )
}
