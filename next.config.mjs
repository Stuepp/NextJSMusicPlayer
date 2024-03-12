/* @type {import('next').NextConfig} */
/*const nextConfig = {};

export default nextConfig;
*/
// next.config.js

/** @type {import('next').NextConfig} */

export default {
    webpack: (config, { isServer }) => {
        // Adiciona a configuração do loader para arquivos MP3
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                publicPath: '/_next',
                outputPath: 'static/media',
                name: '[name].[ext]',
                esModule: false,
                },
            },
            ],
        });

        return config;
    },
};