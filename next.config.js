const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, paths: false }

    return config
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
