/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      // If you are using images from other domains (like Facebook), you should add them here too.
      {
        protocol: 'https',
        hostname: 'scontent.fcla7-1.fna.fbcdn.net',
      },
    ],
  },
};
export default nextConfig;
