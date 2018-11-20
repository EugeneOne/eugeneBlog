module.exports = {
    '/mock': {
        target: 'http://127.0.0.1:9999/',
        changeOrigin: true,
        pathRewrite: {
            '^/mock': '/mock'
        }
    },
    '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
}
