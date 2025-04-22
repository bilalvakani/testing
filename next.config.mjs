// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     async redirects() {
//         return [
//           {
//             source: '/',
//             destination: '/dashboard',
//             permanent: true,
//           },
//         ];
//     },
// };

// export default nextConfig;
import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
};

const withPWA = nextPwa;

export default withPWA(nextConfig);
