import Image from 'next/image'
import { POST_MEDIA_PATH } from './constants'

const Carousel = ({ images }) => (
	<div className="carousel">
		{images.map(({ name, ...info }) => (
			<Image key={name} src={POST_MEDIA_PATH + name} loading="lazy" {...info} />
		))}
	</div>
)

export default Carousel
