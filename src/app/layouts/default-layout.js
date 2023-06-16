export default function DefaultLayout({ children }) {
  return (
    <div>
      <nav>Navigation will be here</nav>
      <div>{children}</div>
    </div>
  )
}
