/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "images.pexels.com", "lh3.googleusercontent.com"],
  },
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
