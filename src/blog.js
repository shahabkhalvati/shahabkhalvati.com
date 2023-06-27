import path from 'path'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { map, sort } from '@/fns'

const postsDirectory = path.join(process.cwd(), '_posts')

const loadFile = async (filename) => {
  const filePath = path.join(postsDirectory, filename)

  const { data, content } = matter.read(filePath)
  typeof content

  return {
    name: path.parse(filename).name,
    metadata: data || {},
    content,
  }
}

export const loadPost = (postId) => loadFile(`${postId}.mdx`)

const cleanup = (file) => ({
  ...file,
  title: file.metadata.title,
  date: new Date(file.metadata.date || file.name),
})

const getPostSlugs = () =>
  fs
    .readdir(postsDirectory)
    .then(map(loadFile))
    .then((promises) => Promise.all(promises))
    .then(map(cleanup))

const byDate = ({ date: a }, { date: b }) => b - a

export function getAllPosts() {
  return getPostSlugs().then(sort(byDate))
}

export const hasTitle = ({ title }) => !!title
