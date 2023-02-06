import { Inter } from '@next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <div className="navbar👌">
          <div className="logo"> FPS DOMJO</div>
          <div className="share">🤷‍♂️</div>
          {/* <div className="admeme"></div> */}
        </div>
        {children}</body>
    </html>
  )
}
