import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    runtime: 'edge',
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;