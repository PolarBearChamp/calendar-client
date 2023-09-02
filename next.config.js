/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mymodernmet.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
