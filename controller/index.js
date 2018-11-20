const fs = require('fs')

var controller = {}

const getController = () => {
    let dir = __dirname
    let files = fs.readdirSync(dir)
    let index = files.indexOf('index.js')

    files.splice(index, 1)
    files = files.forEach(item => {
        controller = Object.assign(controller, require('./' + item))
    })
}
getController()

module.exports = controller
