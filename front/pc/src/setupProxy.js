const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy('/api', {
            target: 'http://172.20.11.23:3000/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api'
            }
        })
    )
}
