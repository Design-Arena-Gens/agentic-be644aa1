/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["zustand", "classnames"],
  },
};

export default nextConfig;
