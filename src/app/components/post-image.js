import Image from 'next/image'
import { POST_MEDIA_PATH } from './constants'

const PostImage = ({ info: { name, ...info }, ...props }) => {
  return (
    <Image src={POST_MEDIA_PATH + name} loading="lazy" {...info} {...props} />
  )
}

export default PostImage
