import { Analytics } from '@vercel/analytics/react'

import WebsiteFooter from './components/website-footer'
import WebsiteHeader from './components/website-header'
import './globals.css'

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
          <div className="wrapper">{children}</div>
        </div>
        <WebsiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
