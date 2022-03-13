const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env === 'production') mode = production;
module.exports = {
    mode: mode,
    entry: "./src/index.js",
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }

            },
            {
                test: /\.s?[a|c]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|)$/,
                type: "asset/resource"
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack",
            template:"src/index.html",
            cache: false
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".js", ".jsx", "scss"],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            styles: path.resolve(__dirname, 'src/styles')
        }
    },
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
