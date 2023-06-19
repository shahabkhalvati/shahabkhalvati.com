import dynamic from 'next/dynamic'
import { getAllPosts, loadPost } from '@/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  SampleComponent: dynamic(() => import('@/app/sample-component')),
}

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
      <MDXRemote source={content} components={components} />
    </div>
  )
}
