/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'drive.google.com' },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./node_modules/@swc/**', './node_modules/sharp/**'],
    },
  },
};

module.exports = nextConfig;
