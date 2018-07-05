module.exports = {
    '/mock': {
        target: 'http://his.macmini.com:3000/mock/70',
        changeOrigin: true,
        pathRewrite: {
            '^/mock': '/'
        }
    }
}
