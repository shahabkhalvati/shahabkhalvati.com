// import Image from 'next/image'

import { getAllPosts } from '@/blog'
import PostListing from '@/app/components/post-listing'

export const metadata = {
  title: 'shahabkhalvati.com | All Posts',
  description: 'Recent thoughts and posts on, stuff',
}

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <main className="home h-feed">
      <ul className="post-list">
        {posts.map((post, i) => (
          <li className={`h-entry ${post.metadata.tags.join(' ')}`} key={i}>
            <PostListing post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
