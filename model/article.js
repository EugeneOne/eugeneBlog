const { mysqlQuery } = require('../db/async-db')

const article = {
    // 获取所有文章
    findAllArticle(num) {
        let _sql = `SELECT * FROM article  where status=1 order by update_time desc ${
            num ? `limit ${num}` : ''
        };`
        return mysqlQuery(_sql)
    },
    // 新增文章
    insertArticle(value) {
        let _sql =
            'insert into article set title=?, brief=?, content=?, create_time=?, update_time=?;'
        return mysqlQuery(_sql, value)
    },
    // 删除文章
    deleteArticle(value) {
        let _sql = 'update article set status=0 where id =?;'
        return mysqlQuery(_sql, value)
    },
    // 修改文章
    editArticle(value) {
        let _sql =
            'update article set title=?, brief=?, content=?, update_time=? where id=?;'
        return mysqlQuery(_sql, value)
    },
    // 获取文章详情
    findArticleById(id) {
        let _sql = 'select * from article where id=?;'
        return mysqlQuery(_sql, id)
    },
    // 获取所有标签
    getAllTags() {
        let _sql = 'select * from article_tags;'
        return mysqlQuery(_sql)
    }
}

module.exports = article
