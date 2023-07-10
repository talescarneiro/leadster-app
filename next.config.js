/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  reactStrictMode: true,
  manifest: {
    icons: {
      src: '/assets/images/logo.png', 
      cache: true,
      sizes: [192, 512], 
      type: 'image/png', 
    },
  },
};