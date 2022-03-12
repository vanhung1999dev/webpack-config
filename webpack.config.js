const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './dist/index.html',
            title:'webpack'
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 3000,
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    }
}