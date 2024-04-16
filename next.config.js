/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.screenly.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
