import { predicates, getAllPosts } from '@/blog'
import PostListing from '@/app/components/post-listing'
import { filter, flip2, isEmptyArray, prop, unique } from '@/fns'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import AshamedGif from './ashamed.gif'
import Link from 'next/link'

const TagTitles = {
  favorites: 'Favorites',
}

const getTagTitle = flip2(prop)(TagTitles)

export async function generateMetadata({ params }, parent) {
  const title = getTagTitle(params.tag)

  return {
    title: `${title} | shahabkhalvati.com`,
  }
}

export const generateStaticParams = async () => {
  const allPosts = await getAllPosts()
  const tags = allPosts.flatMap(p => p.metadata.tags)

  return unique(tags).map(tag => ({ params: { tag } }))
}

export default async function CollectionPage({ params }) {
  const tag = getTagTitle(params.tag)

  if (!tag) {
    redirect('/')
  }

  const taggedPosts = await getAllPosts().then(filter(predicates.withTag(tag)))

  if (isEmptyArray(taggedPosts)) {
    return (
      <main>
        <Image src={AshamedGif} alt="ashamed puppet" />
        <p style={{ marginTop: '1em' }}>Nothing yet…</p>
        <Link href="/">See what&apos;s available already?</Link>
      </main>
    )
  }

  return (
    <main className="home h-feed">
      <ul className="post-list">
        {taggedPosts.map((post, i) => (
          <li className="h-entry" key={i}>
            <PostListing post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
