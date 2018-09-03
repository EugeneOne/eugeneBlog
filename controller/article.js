const moment = require('dayjs')
const model = require('../model/article')

exports.getAllArticle = async (ctx, next) => {
    await model.findAllArticle().then(res => {
        ctx.body = { status: 0, data: res }
    })
}
