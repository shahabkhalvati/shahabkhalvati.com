import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote/rsc'

const DefaultComponents = {
  SampleComponent: dynamic(() => import('@/app/sample-component')),
}

export default function MDXContent({ source, components = {} }) {
  const allComponents = Object.assign({}, DefaultComponents, components)
  return <MDXRemote source={source} components={allComponents} />
}
