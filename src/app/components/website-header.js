import Link from 'next/link'

export default function WebsiteHeader() {
  return (
    <header className="site-header">
      <div className="wrapper">
        <Link href="/" className="site-title">
          Shahab
          <br />
          Khalvati
        </Link>
        <nav className="site-nav">
          <div>
            <Link href="/favorites" className="page-link">
              Favorites
            </Link>
            <Link href="/photos" className="page-link">
              Photos
            </Link>
            <Link href="/about" className="page-link">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
