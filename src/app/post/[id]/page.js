import MDXContent from '@/app/components/mdx-content'
import { getAllPosts, loadPost } from '@/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const generateStaticParams = async () => {
  const allPosts = await getAllPosts()
  return allPosts.map((post) => {
    params: {
      id: post.name
    }
  })
}

export default async function PostPage({ params }) {
  const data = await loadPost(params.id)
  const content = data.content

  return (
    <div>
      <h1>{data.metadata.title}</h1>
      <MDXContent source={content} />
    </div>
  )
}
