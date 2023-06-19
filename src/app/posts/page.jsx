import Head from 'next/head'
import DefaultLayout from '@/app/layouts/default-layout'
import Link from 'next/link'
import { getAllPosts } from '@/blog'

export const metadata = {
  title: 'All Posts',
}

export default async function Page() {
  const posts = await getAllPosts()
  return (
    <>
      <DefaultLayout>
        <ul>
          {posts.map(({ title, name, content }, i) => (
            <li key={i}>
              <Link href={`/post/${name}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </DefaultLayout>
    </>
  )
}
