import Link from 'next/link'

const CurrentYear = new Date().getFullYear()

export default function WebsiteFooter() {
	return (
		<footer className="site-footer">
			<div className="wrapper">
				<div className="">
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
