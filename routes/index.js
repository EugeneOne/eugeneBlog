const router = require('koa-router')()
const Home = require('../controller/home')

module.exports = app => {
  router.get('/', Home.index)
  router.get('/about', Home.about)

  app.use(router.routes()).use(router.allowedMethods())
}
