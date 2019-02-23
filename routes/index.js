const router = require('koa-router')()
const Home = require('../controller/home')

module.exports = app => {
    router.get('/', Home.index)
    router.get('/about', Home.about)
    // router.allowedMethods 优化处理405和501 而不是都显示404
    // 405表示请求url有，但是没有写该请求方式的响应
    // 501表示服务器不支持该请求方式
    app.use(router.routes()).use(router.allowedMethods())
}
