/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['res.cloudinary.com']
    }
}

module.exports = nextConfig
