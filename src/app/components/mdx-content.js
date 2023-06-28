import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc'

const DefaultComponents = {
  YouTubePlayer: dynamic(() => import('./youtube-player')),
  PostImage: dynamic(() => import('./post-image')),
  Carousel: dynamic(() => import('./carousel')),
}

export default function MDXContent({ source, components = {} }) {
  const allComponents = Object.assign({}, DefaultComponents, components)
  return <MDXRemote source={source} components={allComponents} />
}
