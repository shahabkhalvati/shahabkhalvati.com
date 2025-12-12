import Link from 'next/link'
import { hasTitle } from '@/blog'
import DateDisplay from './date-display'
import MDXContent from './mdx-content'

const MicroPostHeading = ({ date, href }) => (
	<span className="post-meta" style={{ opacity: 1 }}>
		<Link href={href}>
			<DateDisplay dateObj={date} />
		</Link>
	</span>
)

const PostHeading = ({ date, href, title }) => (
	<>
		<span className="post-meta">
			<DateDisplay dateObj={date} />
		</span>
		<h1>
			<Link href={href}>{title}</Link>
		</h1>
	</>
)

const ReadMore = ({ href }) => (
	<p>
		<Link href={href} className="post-meta" style={{ opacity: 1 }}>
			Read more
		</Link>
	</p>
)

export default async function PostListing({ post }) {
	const {
		date,
		title,
		name,
		content,
		metadata: { summary, noContentAsSummary }
	} = post

	const href = `/post/${name}`

	return (
		<>
			{hasTitle(post) ? <PostHeading {...{ date, href, title }} /> : <MicroPostHeading {...{ date, href }} />}
			{hasTitle(post) && !summary && noContentAsSummary ? (
				<div style={{ marginTop: 'var(--spacing-2-neg)' }} />
			) : (
				<div className="e-content">
					<MDXContent source={summary || content} />
					{!!summary && <ReadMore href={href} />}
				</div>
			)}
		</>
	)
}
