const { mysqlQuery } = require('../db/async-db')

const article = {
    // 获取所有文章
    findAllArticle(value) {
        let _sql = 'SELECT * FROM article;'
        return mysqlQuery(_sql)
    },
    // 新增文章
    insertArticle(value) {
        let _sql = 'inser into article set title=?, content=?, creat_time=?;'
        return mysqlQuery(_sql, value)
    }
}

module.exports = article
