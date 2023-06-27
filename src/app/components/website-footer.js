const CurrentYear = new Date().getFullYear()

export default function WebsiteFooter() {
  return (
    <footer class="site-footer">
      <div class="wrapper">
        <div class="">
          <div class="footer-row">
            <p class="text">
              Connect on:{' '}
              <a rel="me" href="https://bsky.app/profile/shahabkhalvati.com">
                Bluesky
              </a>
            </p>
            <p class="text">
              <a
                rel="me"
                href="https://mastodon.social/@shahab?remote_follow=1"
              >
                Mastodon
              </a>
            </p>
            <p class="text">
              <a href="https://micro.blog/shahab">Micro.blog</a>
            </p>
          </div>
          <div class="footer-row">
            <p class="text rss-subscribe">
              Subscribe{' '}
              <a href="https://shahabkhalvati.com/feed.xml">via RSS</a>
            </p>
          </div>
          <div class="footer-row">
            <p class="text">© {CurrentYear} Shahab Khalvati</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
