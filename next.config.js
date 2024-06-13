/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prime-project.s3.sa-east-1.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "uploadthing-prod-sea1.s3.us-west-2.amazonaws.com"
      }
    ]
  }
};

module.exports = nextConfig;
