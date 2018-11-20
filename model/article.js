const { mysqlQuery } = require('../db/async-db')

const article = {
    // 获取所有文章
    findAllArticle() {
        let _sql = 'SELECT * FROM article;'
        return mysqlQuery(_sql)
    },
    // 新增文章
    insertArticle(value) {
        let _sql = 'insert into article set title=?, content=?, create_time=?;'
        return mysqlQuery(_sql, value)
    },
    // 获取文章详情
    findArticleById(id) {
        console.log('id:', id)
        let _sql = 'select * from article where id=?;'
        return mysqlQuery(_sql, id)
    }
}

module.exports = article
