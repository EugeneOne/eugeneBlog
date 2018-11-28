const proxy = require('http-proxy-middleware')
module.exports = function(app) {
	app.use(
		proxy('/api', {
			target: 'http://47.98.144.85:3000/',
			changeOrigin: true,
			pathRewrite: {
				'^/api': '/api'
			}
		})
	)
}
