/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use export for production builds, not dev mode
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    // Enable image optimization in dev mode for better performance
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
