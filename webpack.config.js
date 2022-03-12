const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let mode = 'development';
if (process.env === 'production') mode = production;
module.exports = {
    mode: mode,
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

            },
            {
                test: /\.s?[a|c]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin()
    ],
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