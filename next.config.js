/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["http://localhost:1337/uploads/", "localhost"],
  },
};

module.exports = nextConfig;
