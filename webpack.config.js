const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }

            }
        ]
    },
    devtool: false,
    devServer: {
        allowedHosts: 'all',
        port: 4000,
        open: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
            watch: true
        },
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    }
}