const dayjs = require('dayjs')
const model = require('../model/user')

const user = {
    getUser: async (ctx, next) => {
        let { id } = ctx.request.body
        await model.getUser((id = '10000000')).then(res => {
            console.log('res:', res)
            ctx.body = { status: 0, data: res[0] }
        })
    }
}

module.exports = user
