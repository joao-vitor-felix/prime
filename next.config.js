/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prime-project.s3.sa-east-1.amazonaws.com"
      }
    ]
  }
};

module.exports = nextConfig;
