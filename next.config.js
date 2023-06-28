const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, paths: false }

    return config
  },
  async redirects() {
    return [
      {
        source: '/favorites',
        destination: '/collection/favorites',
        permanent: false,
      },
    ]
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
