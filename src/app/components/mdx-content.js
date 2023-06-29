import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc'

const DefaultComponents = {
  Carousel: dynamic(() => import('./carousel')),
  ExternalLink: dynamic(() => import('./external-link')),
  PostImage: dynamic(() => import('./post-image')),
  YouTubePlayer: dynamic(() => import('./youtube-player')),
}

export default function MDXContent({ source, components = {} }) {
  const allComponents = Object.assign({}, DefaultComponents, components)
  return <MDXRemote source={source} components={allComponents} />
}
