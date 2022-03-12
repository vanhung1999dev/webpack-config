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

            }
        ]
    },
    devtool: "source-map",
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