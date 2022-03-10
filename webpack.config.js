const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    resolve:{
        fallback:{
            http: require.resolve('stream-http'),
            crypto: require.resolve('crypto-browserify'),
            url: require.resolve('url/'),
            https: require.resolve('https-browserify'),
            stream: require.resolve('stream-browserify'),
            fs: false,

        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/build"),
    },
    devServer: {
        port: 3000,
        static:{
            directory: path.resolve(__dirname,"/build"),
        },
        hot: true
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.styl$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin(),
    ]
};