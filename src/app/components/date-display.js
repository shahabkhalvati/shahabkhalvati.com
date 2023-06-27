const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function DateDisplay({ dateObj }) {
  const displayDate = dateObj.toLocaleDateString(undefined, options)
  return <time dateTime={dateObj.toLocaleString()}>{displayDate}</time>
}
