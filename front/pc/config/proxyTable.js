module.exports = {
    '/mock': {
        target: 'http://172.20.11.40:9999',
        changeOrigin: true,
        pathRewrite: {
            '^/mock': '/mock'
        }
    }
}
