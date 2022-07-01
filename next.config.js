/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "http://localhost:1337/uploads/",
      ,
      "localhost",
      "http://localhost:1337",
      "https://dashboard.heroku.com/",
      "https://conservative-mountie-47338.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
