import MainTitle from '../components/main-title'
import Content from './content.mdx'

export const metadata = {
	title: 'About Me | shahabkhalvati.com'
}

export default async function ContentPage() {
	return (
		<article>
			<MainTitle title="About" />
			<Content />
		</article>
	)
}
