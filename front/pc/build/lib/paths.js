const { resolve } = require('../utils')

module.exports = {
    appBuild: resolve('dist'),
    appStatic: resolve('static'),
    appPublic: resolve('public'),
    appPackageJson: resolve('package.json'),
    appSrc: resolve('src')
}
