const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: path.resolve(__dirname, './src/components/app.jsx'),
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            title: 'BestPrice',
            filename: './index.html',
            template: './src/index.ejs',
            favicon: './src/favicon.ico',
            minify: {
                removeComments: true,
                html5: true,
                collapseWhitespace: true
            }
        }),
        extractSass,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",  // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader"  // compiles Sass to CSS
                    }],
                    // use style-loader in development
                    fallback: "style-loader"  // creates style nodes from JS strings
                })
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
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        collapseWhitespace: false
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "img/"
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                    // 'file-loader'
                ]
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
        open: true,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: 'index.html' }// qualqueer coisa retorna index.html
            ],
        }
    }
}