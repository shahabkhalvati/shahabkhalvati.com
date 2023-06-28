import DateDisplay, { getDateText } from '@/app/components/date-display'
import MainTitle from '@/app/components/main-title'
import MDXContent from '@/app/components/mdx-content'
import { getAllPosts, loadPost } from '@/blog'

export async function generateMetadata({ params }, parent) {
  const { title, date } = await loadPost(params.id)
  const dateText = getDateText(date)

  return {
    title: title || `${dateText} | shahabkhalvati.com`,
  }
}

export const generateStaticParams = async () => {
  const allPosts = await getAllPosts()
  return allPosts.map((post) => ({
    params: {
      id: post.name,
    },
  }))
}

export default async function PostPage({ params }) {
  const { content, title, date } = await loadPost(params.id)

  return (
    <>
      <header className="post-header">
        {!!title ? (
          <MainTitle title={title} />
        ) : (
          <p className="post-meta">
            <DateDisplay dateObj={date} />
          </p>
        )}
      </header>
      <div className="post-content e-content">
        <MDXContent source={content} />
      </div>
    </>
  )
}
