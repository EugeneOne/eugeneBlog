const utils = require('./utils')
// 获取当前文件路径
const path = require('path')
const webpack = require('webpack')
// 提取css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// index.html 模板
const HtmlWebpackPlugin = require('html-webpack-plugin')

// function resolve(relatedPath) {
//     return path.join(__dirname, relatedPath)
// }

module.exports = {
    mode: 'development',
    entry: utils.resolve('src/client.js'),
    output: {
        path: utils.resolve('dist'),
        filename: '[name].[hash:4].js',
        chunkFilename: 'chunks/[name].[hash:4].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.less'],
        alias: {
            '@': utils.resolve('src'),
            '@components': utils.resolve('src/components'),
            '@page': utils.resolve('src/page'),
            '@config': utils.resolve('src/config')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                loader: 'babel-loader',
                // 哪些文件夹不需要babel-loader
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name]_[hash:7].[ext]'
                }
            },
            {
                test: /\.css/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader']
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]_[local]_[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: utils.resolve('src/index.html')
        })
    ]
}
