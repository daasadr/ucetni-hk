import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ucetni-hk',
  assetPrefix: '/ucetni-hk/',
  images: { unoptimized: true },
};

export default nextConfig;
