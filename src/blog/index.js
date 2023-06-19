import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), '_posts')

const loadFile = async (filename) => {
  const filePath = path.join(postsDirectory, filename)

  const { data, content } = matter.read(filePath)

  return {
    name: path.parse(filename).name,
    metadata: data || {},
    content,
  }
}

export const loadPost = (postId) => loadFile(`${postId}.mdx`)

const cleanup = (file) => ({ ...file, title: file.metadata.title || file.name })

const getPostSlugs = () =>
  fs
    .readdir(postsDirectory)
    .then((files) => files.map(loadFile))
    .then((promises) => Promise.all(promises))
    .then((files) => files.map(cleanup))

export function getAllPosts() {
  const slugs = getPostSlugs()
  // const posts = slugs
  //   .map((slug) => getPostBySlug(slug, fields))
  //   // sort posts by date in descending order
  //   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  // return posts
  return slugs
}
