/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://116.202.210.102:4040/api/:path*", // Replace with your backend server URL
      },
    ];
  },
};

export default nextConfig;
