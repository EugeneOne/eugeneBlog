const router = require('koa-router')()
const controller = require('../controller')
const Home = require('../controller/home')

// router.get('/', Home.index)
// router.get('/get-all-article', controller.getAllArticle)

// module.exports = router

//console.log('controller:', controller)

module.exports = app => {
    router.get('/', Home.index)
    // 获取所有文章
    router.get('/api/blog/get-all-article', controller.getAllArticle)
    // 新建文章
    router.post('/api/blog/new-article', controller.newArticle)
    // 获取用户
    router.get('/api/blog/get-user', controller.getUser)
    // 获取单个文章
    router.get('/api/blog/article-detail', controller.articleDetail)
    app.use(router.routes()).use(router.allowedMethods())
}
