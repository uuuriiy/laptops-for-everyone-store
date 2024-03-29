/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { 
    serverComponentsExternalPackages: ["@prisma/client, prisma"],
  },
  webpack(config) {
      config.module.rules.push({
        resolve: {
          alias: {
             handlebars: 'handlebars/dist/handlebars.min.js'
          },
        }
      })
      config.experiments = { ...config.experiments, topLevelAwait: true };
      
      return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ]
  },
};

export default nextConfig;
