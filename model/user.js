const { mysqlQuery } = require('../db/async-db')

const user = {
    // 用户信息
    getUser(values) {
        let _sql = 'SELECT * FROM user WHERE ID = ?;'
        return mysqlQuery(_sql, values)
    }
}

module.exports = user
