const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/components/app.jsx'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'Teste',
            filename: './index.html',
            template: './src/index.ejs',
            favicon: './src/favicon.ico'
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: !process.env.NODE_ENV === 'production'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, './src/components/'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            // {
            //     test: /.(jpg|png|svg)$/,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 250000000
            //         }
            //     }
            // },
            {
                test: /\.(png|jpg|gif|svg|webp)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath:'img/'
                    },
                }
            }
        ]
    },
    devServer: {
        inline: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        watchContentBase: true,
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        open: true
    }
}