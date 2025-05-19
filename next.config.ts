/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/travels' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/travels/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
