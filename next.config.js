/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: debug ? '/SheaWebsite2/' : '', 
  reactStrictMode: true,
}

module.exports = nextConfig
