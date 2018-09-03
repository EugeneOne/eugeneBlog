const router = require('koa-router')()
const controller = require('../controller/article')
const Home = require('../controller/home')

// router.get('/', Home.index)
// router.get('/get-all-article', controller.getAllArticle)

// module.exports = router

console.log('controller')

module.exports = app => {
    router.get('/', Home.index)
    router.get('/about', Home.about)
    router.get('/api/get-all-article', controller.getAllArticle)

    app.use(router.routes()).use(router.allowedMethods())
}
