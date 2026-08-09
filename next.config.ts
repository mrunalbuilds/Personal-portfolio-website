import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Personal-portfolio-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal-portfolio-website/' : '',
};

export default nextConfig;
