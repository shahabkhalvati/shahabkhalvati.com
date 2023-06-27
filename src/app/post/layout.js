import Link from 'next/link'

export default function PostLayout({ children }) {
  return (
    <section>
      <nav>
        <Link href="/">All Posts</Link>
      </nav>
      {children}
    </section>
  )
}
