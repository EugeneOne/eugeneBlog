const Koa = require('koa')
const path = require('path')
// 获取静态资源的中间件
const serve = require('koa-static')
// koa模板引擎
const views = require('koa-views')
// 类似json-parse
const koaBody = require('koa-body')
// 用于替换console.log
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const router = require('./routes')
const api = require('./routes/api')
const { mysqlQuery } = require('./db/async-db')
const getSqlContentMap = require('./util/get-sql-content-map')
const CONFIG = require('./config/default')

const app = new Koa()

app.use(logger())
app.use(koaBody({ multipart: true }))

// 加载静态资源
app.use(serve(path.join(__dirname, '/public')))

onerror(app)

// 打印脚本执行日志
const eventLog = function(err, sqlFile, index) {
    if (err) {
        console.log(
            `[ERROR] sql脚本文件: ${sqlFile} 第${index +
                1}条脚本 执行失败 o(╯□╰)o ！`
        )
    } else {
        console.log(
            `[SUCCESS] sql脚本文件: ${sqlFile} 第${index +
                1}条脚本 执行成功 O(∩_∩)O !`
        )
    }
}
// 获取所有sql脚本内容
let sqlContentMap = getSqlContentMap()

// 执行建表sql脚本
const createAllTables = async () => {
    for (let key in sqlContentMap) {
        let sqlShell = sqlContentMap[key]
        let sqlShellList = sqlShell.split(';')
        for (let [i, shell] of sqlShellList.entries()) {
            if (shell.trim()) {
                let result = await mysqlQuery(shell)
                if (result.serverStatus * 1 === 2) {
                    eventLog(null, key, i)
                } else {
                    eventLog(true, key, i)
                }
            }
        }
    }
    console.log('sql脚本执行结束！')
    console.log('请按 ctrl + c 键退出！')
}

// router(app)
api(app)
;(async () => {
    try {
        createAllTables()
    } catch (e) {
        console.error('ERROR:', e)
        return
    }

    // 服务器部署需要写上服务器ip，不能localhost
    app.listen(CONFIG.port, CONFIG.ip, () => {
        console.log(`Server running at http://${CONFIG.ip}:${CONFIG.port}/`)
    })
})()
