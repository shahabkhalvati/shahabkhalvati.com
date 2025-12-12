export default function ExternalLink({ title, href, ...rest }) {
	return (
		<a target="_blank" href={href} {...rest}>
			{title}
		</a>
	)
}
