const fs = require('fs')
const walkFile = require('./walk-file')

/**
 * 获取sql目录下的文件目录数据
 * @return {object}
 */

const getSqlMap = () => {
    let basePath = __dirname
    let pathArr = basePath.split('/')
    pathArr = pathArr.splice(0, pathArr.length - 1)
    basePath = pathArr.join('/') + '/db/sql/'
    let fileList = walkFile(basePath, 'sql')
    return fileList
}
module.exports = getSqlMap
