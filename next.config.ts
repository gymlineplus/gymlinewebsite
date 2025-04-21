import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    
    // added a origin to allow request cross origin
    // 3000-idx-gymline-website-1745219110087.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'gymlineplus.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: '3000-idx-gymline-website-1745219110087.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev',
      },
    ],
  },
};

export default nextConfig;
