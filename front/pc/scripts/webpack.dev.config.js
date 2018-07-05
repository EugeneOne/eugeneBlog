const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const proxyTable = require('../config/proxyTable')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

function getIPAddress() {
    const interfaces = require('os').networkInterfaces()
    for (let devName in interfaces) {
        const iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i]
            if (
                alias.family === 'IPv4' &&
                alias.address !== '127.0.0.1' &&
                !alias.internal
            ) {
                return alias.address
            }
        }
    }
}

module.exports = merge(baseWebpackConfig, {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: resolve('../src'),
        // 所有服务器资源采用gzip压缩
        compress: true,
        // 开启模块热替换，实现inline mode模式自动刷新
        hot: true,
        proxy: proxyTable,
        host: getIPAddress(),
        historyApiFallback: false,
        port: 9090
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // 启动热加载功能
    ]
})
