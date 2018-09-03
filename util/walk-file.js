const fs = require('fs')
/**
 * 遍历目录下的文件目录
 * @param  {string} pathResolve  需进行遍历的目录路径
 * @param  {string} mime         遍历文件的后缀名
 * @return {object}              返回遍历后的目录结果
 */

/*
 * entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
 * 迭代对象中数组的索引值作为 key， 数组元素作为 value。
 */

const walkFile = (pathResolve, mime) => {
    let files = fs.readdirSync(pathResolve)
    let fileList = {}
    for (let [i, item] of files.entries()) {
        let fileArr = item.split('.')
        let itemMime =
            fileArr.length > 1 ? fileArr[fileArr.length - 1] : 'undefined'
        let keyName = item + ''
        if (mime === itemMime) {
            fileList[keyName] = pathResolve + item
        }
    }
    return fileList
}

module.exports = walkFile
