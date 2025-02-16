/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'redefinecommerce.blob.core.windows.net',
        port: '',
        pathname: '/lanomedia/**',
      },
    ],
  },
}

module.exports = nextConfig 