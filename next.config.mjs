/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    // এটি বিল্ড করার সময় ESLint এর সাধারণ টাইপো এররগুলোকে ইগনোর করবে
    ignoreDuringBuilds: true,
  },
  images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

export default nextConfig;
