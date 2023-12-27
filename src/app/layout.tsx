import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4'>
            <Nav/>
            <div className='pt-24 container px-4 md:px-48 mx-auto'>          
              {children}
            </div>
          </div>
        </div>

      </body>
    </html>
  )
}
