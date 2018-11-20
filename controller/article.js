// const dayjs = require('dayjs')
const model = require('../model/article')

const article = {
    getAllArticle: async (ctx, next) => {
        await model.findAllArticle().then(res => {
            ctx.body = { status: 0, data: res }
        })
    },
    newArticle: async (ctx, next) => {
        let { title, content, create_time } = ctx.request.body
        await model.insertArticle([title, content, create_time]).then(() => {
            ctx.body = {
                code: 200,
                message: '发表文章成功'
            }
        })
    },
    articleDetail: async ctx => {
        let { id } = ctx.request.query
        await model.findArticleById(id).then(res => {
            ctx.body = { status: 0, data: res[0] }
        })
    }
}

module.exports = article
