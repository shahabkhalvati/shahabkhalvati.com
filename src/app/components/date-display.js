const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const getDateText = (dateObj) =>
  dateObj.toLocaleDateString(undefined, options)

export default function DateDisplay({ dateObj }) {
  const displayDate = getDateText(dateObj)
  return <time dateTime={dateObj.toLocaleString()}>{displayDate}</time>
}
