const path = require('path');
const merge = require('webpack-merge');

module.exports = env => {
    const sharedConfig = {
        mode: env && env === 'prod' ? 'production' : 'development',
        output: {
            filename: '[name].js',
            path: path.join(__dirname, 'wwwroot/js'),
            publicPath: '/js/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use:
                    {
                        loader: 'file-loader',
                    }
                }
            ]
        }
    };

    const clientBundleConfig = merge(sharedConfig, {
        entry: { 'bundle.client': './Assets/js/client.js' },
    });

    const menuBundleConfig = merge(sharedConfig, {
        target: 'node',
        entry: { 'bundle.server.menu': './Assets/js/server/server.menu.js' },
        output: {
            libraryTarget: 'commonjs2'
        }
    });

    const basketBundleConfig = merge(sharedConfig, {
        target: 'node',
        entry: { 'bundle.server.basket': './Assets/js/server/server.basket.js' },
        output: {
            libraryTarget: 'commonjs2'
        }
    });

    return [clientBundleConfig, menuBundleConfig, basketBundleConfig];
};
