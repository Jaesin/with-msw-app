console.log(`[next.config] File loaded. Process id: ${process.pid}.`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
