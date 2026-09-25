/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // allow workout images from the API
    ],
  },
};
module.exports = nextConfig;
