import { Inter } from '@next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <div className="fnav💀">
          <Link className='fnav-links' href="">
            <img className='fnav-icons' src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1675973441/FPS%20DOJO/navicon/icons8-naruto_agtmtz.svg" alt="naruto svg" />
          </Link>
          <Link className='fnav-links' href="">
            <img className='fnav-icons' src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1675973860/FPS%20DOJO/navicon/icons8-stormtrooper_b7vxpo.svg" alt="star troop" />
          </Link>
          <Link className='fnav-links' href="">
            <img className='fnav-icons' src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1675974151/FPS%20DOJO/navicon/icons8-info_3_he15ac.svg" alt="info" />
          </Link>
          <Link className='fnav-links' href="">
            <img className='fnav-icons' src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1675974237/FPS%20DOJO/navicon/dollar-circle-line_cngkjf.svg" alt="dollar" />
          </Link>
        </div>
        {children}</body>
    </html>
  )
}
