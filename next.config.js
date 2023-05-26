/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/1083515/pexels-photo-1083515.jpeg",
      },
    ],
  },
};

module.exports = nextConfig;
