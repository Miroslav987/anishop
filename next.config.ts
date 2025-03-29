import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  swcMinify: true,      
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },  
};

export default nextConfig;

