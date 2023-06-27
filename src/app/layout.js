import WebsiteFooter from './components/website-footer'
import WebsiteHeader from './components/website-header'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shahabkhalvati.com',
  description: 'My website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WebsiteHeader />
        <div className="page-content">
          <div className="wrapper">
            {/* <nav>Navigation will be here</nav> */}
            <div>{children}</div>
          </div>
        </div>
        <WebsiteFooter />
      </body>
    </html>
  )
}
