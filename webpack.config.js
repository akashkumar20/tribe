const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/App.tsx'),
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'app.bundle.js',
    //     publicPath: '/',
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'tribeman',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                  attributes: [':data-src'],
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer'),
                                require('postcss-nested'),
                            ],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new Dotenv(),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'index.html'),
        // }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        disableHostCheck: true,
        historyApiFallback: {
            index: 'index.html'
        },
        host: '0.0.0.0',
        hot: false,
        inline: false,
        liveReload: false,
        port: process.env.PORT,
        public: process.env.PUBLIC_URL,
    },
};