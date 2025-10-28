import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for SEO and crawlability
  poweredByHeader: false,
  compress: true,

  // Ensure proper HTML rendering for crawlers
  reactStrictMode: true,

  // Optional: Add trailing slashes for consistency
  trailingSlash: false,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
