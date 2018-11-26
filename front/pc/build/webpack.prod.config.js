const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 拷贝文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// const WebpackAliyunOssPlugin = require('webpack-aliyun-oss-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const paths = require('./lib/paths')
const utils = require('./utils')

const shouldUseSourceMap = process.env.SOURCE_MAP !== 'false'

const htmlWebpackPlugins = []
htmlWebpackPlugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        chunks: ['vendors', 'index'],
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    })
)

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    // module: {
    //     rules: utils.styleLoaders({
    //         sourceMap: shouldUseSourceMap,
    //         extract: true,
    //         usePostCSS: true,
    //         minimize: true
    //     })
    // },
    devtool: shouldUseSourceMap ? 'hidden-source-map' : false,
    output: {
        filename: utils.assetsPath('js/[name]_[chunkhash:7].js'),
        chunkFilename: utils.assetsPath('js/[id]_[chunkhash:7].js')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: true,
            cacheGroups: {
                default: {
                    chunks: 'async',
                    minChunks: 2,
                    priority: -20,
                    name: 'default',
                    reuseExistingChunk: true
                },
                vendors: {
                    name: 'vendors',
                    enforce: true,
                    test: function(module) {
                        return (
                            module.resource &&
                            module.resource.startsWith(
                                path.join(__dirname, '../node_modules')
                            )
                        )
                    },
                    priority: -10,
                    reuseExistingChunk: true
                },
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                    test: function(module) {
                        return (
                            module.resource &&
                            module.resource.startsWith(
                                path.join(__dirname, '../src')
                            )
                        )
                    },
                    priority: -5,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin([paths.appBuild], {
            root: path.join(__dirname, '..')
        }),
        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].css'),
            chunkFilename: utils.assetsPath('css/[id].css')
        }),
        new webpack.HashedModuleIdsPlugin(),
        ...htmlWebpackPlugins,
        new CopyWebpackPlugin([
            {
                from: paths.appStatic,
                to: 'static'
            }
        ])
        // ,
        // new SkeletonWebpackPlugin({
        //     webpackConfig: require('./webpack.skeleton.conf')
        // })
    ],
    stats: {
        entrypoints: false,
        children: false
    }
})

if (process.env.npm_config_report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

// if (process.env.mode === 'production' || process.env.mode === 'staging') {
//     webpackConfig.plugins.push(
//         new WebpackAliyunOssPlugin({
//             /*
//             ak: 'LTAIgjODAgcoVmNx',
//             sk: 'JNWho2MVgEbrhTlrwH2QWXQIALbnqC',
//             bucket: 'avatarhis-zhenliao',
//             region: 'oss-cn-qingdao', // bucket所在区域的接入点
//             */
//             ak: 'wCO7OCW1q9UGI5B3',
//             sk: 'coLMpdADEhU3pr8rHQi5TCsBC6gmqM',
//             bucket: 'crmweb',
//             region: 'oss-cn-beijing', // bucket所在区域的接入点
//             filter: function(asset) {
//                 return !/\.html$/.test(asset) && !/\.map$/.test(asset)
//             }
//         })
//     )
// }

module.exports = webpackConfig
