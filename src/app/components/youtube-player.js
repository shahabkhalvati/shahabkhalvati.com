export default function YouTubePlayer({ src }) {
	return (
		<iframe
			src={src}
			title="YouTube video player"
			frameBorder="0"
			style={{ border: 0 }}
			allow="encrypted-media; picture-in-picture; web-share"
			allowFullScreen
		/>
	)
}
