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
					<ul style={{ listStyle: 'none', margin: 0 }}>
						<li>
							<Link href="/about" className="page-link">
								About Me
							</Link>
						</li>
						<li>
							<Link href="/collection/favorites" className="page-link">
								Favorite Findings
							</Link>
						</li>
						<li>
							<Link href="/collection/photos" className="page-link">
								Photos
							</Link>
						</li>
						<li>
							<Link href="/collection/on-software" className="page-link">
								Meditations on Software
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
