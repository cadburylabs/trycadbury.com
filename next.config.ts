import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            'your-cdn-domain.com', // Replace with your actual CDN domain
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    experimental: {
        optimizePackageImports: ['gsap', 'lenis'],
    },
}

export default nextConfig
