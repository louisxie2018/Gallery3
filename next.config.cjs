// @ts-check

import path from 'path';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');
    return config;
  },
};

export default nextConfig;