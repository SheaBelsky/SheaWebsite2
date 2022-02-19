/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  assetPrefix: !debug ? '/SheaWebsite2/' : '',
  images: {
    loader: "custom",
  },
  reactStrictMode: true,
}

module.exports = nextConfig
