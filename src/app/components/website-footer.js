import Link from 'next/link'

const CurrentYear = new Date().getFullYear()

export default function WebsiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrapper">
        <div className="">
          <div className="footer-row">
            <p className="text">
              Connect on:{' '}
              <a
                rel="me"
                href="https://bsky.app/profile/shahabkhalvati.com"
                target="_blank"
              >
                Bluesky
              </a>
            </p>
            <p className="text">
              check <Link href="/about">About</Link>
            </p>
          </div>
          {/* TODO: generate the feed
            <div className="footer-row">
            <p className="text">
              Subscribe{' '}
              <a href="https://shahabkhalvati.com/feed.xml">via RSS</a>
            </p>
          </div> */}
          <div className="footer-row">
            <p className="text">© {CurrentYear} Shahab Khalvati</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
