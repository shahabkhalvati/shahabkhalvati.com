import DefaultLayout from '@/app/layouts/default-layout'
import PageContent, { meta } from './sample-mdx-page.mdx'

const Page = ({ children }) => (
  <DefaultLayout>
    <h2>{meta.title}</h2>
    <PageContent />
  </DefaultLayout>
)

export default Page
