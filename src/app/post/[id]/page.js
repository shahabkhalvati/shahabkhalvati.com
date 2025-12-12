import DateDisplay, { getDateText } from '@/app/components/date-display'
import MainTitle from '@/app/components/main-title'
import MDXContent from '@/app/components/mdx-content'
import { getAllPosts, loadPost } from '@/blog'

const guessFirstP = content => {
	const lines = content.trim().split('\n')
	return lines.slice(0, lines.indexOf('')).join('\n')
}

export async function generateMetadata({ params } ) {
	const postId = (await params).id
	const { title, date, content, metadata } = await loadPost(postId)
	const dateText = getDateText(date)

	return {
		title: title || `${dateText} | shahabkhalvati.com`,
		description: metadata.description || guessFirstP(metadata.summary || content || '')
	}
}

export const generateStaticParams = async () => {
	const allPosts = await getAllPosts()
	return allPosts.map(post => ({
		params: {
			id: post.name
		}
	}))
}

export default async function PostPage({ params }) {
	const postId = (await params).id
	const { content, title, date } = await loadPost(postId)

	return (
		<>
			{title ? (
				<MainTitle title={title} />
			) : (
				<header className="post-header">
					<p className="post-meta">
						<DateDisplay dateObj={date} />
					</p>
				</header>
			)}
			<div className="post-content e-content">
				<MDXContent source={content} />
			</div>
		</>
	)
}
