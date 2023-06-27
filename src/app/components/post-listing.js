import Link from 'next/link'
import DateDisplay from './date-display'
import { hasTitle } from '@/blog'
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

export default async function PostListing({ post }) {
  const {
    date,
    title,
    name,
    content,
    metadata: { summary },
  } = post

  const href = `/post/${name}`

  return (
    <>
      {hasTitle(post) ? (
        <PostHeading {...{ date, href, title }} />
      ) : (
        <MicroPostHeading {...{ date, href }} />
      )}
      <div className="e-content">
        <MDXContent source={summary || content} />
      </div>
    </>
  )
}
