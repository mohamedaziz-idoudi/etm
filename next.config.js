/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
        webpack: (config, { isServer }) => {
          if (!isServer) {
            config.module.rules.push({
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192, // Inlines images smaller than 8KB
                    publicPath: '/_next',
                    outputPath: 'static/images', // Output path for copied images
                    name: '[name].[hash].[ext]',
                    esModule: false,
                  },
                },
              ],
            });
          }
          return config;
        },
      },
}

module.exports = nextConfig
