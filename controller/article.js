const dayjs = require('dayjs')
const model = require('../model/article')

const article = {
    getAllArticle: async (ctx, next) => {
        let { num } = ctx.request.query
        await model.findAllArticle(num).then(res => {
            ctx.body = { status: 0, data: res }
        })
    },
    deleteArticle: async ctx => {
        let { id } = ctx.request.body
        if (!id) {
            ctx.body = {
                code: 200,
                message: '缺少id'
            }
            return
        }
        await model.deleteArticle(id).then(() => {
            ctx.body = {
                code: 200,
                message: '删除成功'
            }
        })
    },
    editArticle: async ctx => {
        let { title, content, id } = ctx.request.body
        let brief = content.substring(100)
        let update_time = dayjs().format('YYYY-MM-DD hh:mm:ss')
        // 有id时为修改，没有时为新增
        if (id) {
            await model
                .editArticle([title, brief, content, update_time, id])
                .then(() => {
                    ctx.body = {
                        code: 200,
                        message: '修改文章成功'
                    }
                })
        } else {
            let create_time = dayjs().format('YYYY-MM-DD hh:mm:ss')
            await model
                .insertArticle([
                    title,
                    brief,
                    content,
                    create_time,
                    update_time
                ])
                .then(() => {
                    ctx.body = {
                        code: 200,
                        message: '发表文章成功'
                    }
                })
        }
    },
    articleDetail: async ctx => {
        let { id } = ctx.request.query
        await model.findArticleById(id).then(res => {
            ctx.body = { status: 0, data: res[0] }
        })
    },
    getAllTags: async ctx => {
        await model.getAllTags().then(res => {
            ctx.body = { status: 0, data: res }
        })
    }
}

module.exports = article
