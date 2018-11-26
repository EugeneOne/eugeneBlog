const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 获取当前工作区路径
const appDirectory = fs.realpathSync(process.cwd())

exports.appDirectory = appDirectory

exports.assetsPath = function(_path) {
    return path.posix.join('static', _path)
}

exports.resolve = function(dir) {
    console.log(appDirectory, dir)
    return path.resolve(appDirectory, dir)
}
exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)
    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}
exports.cssLoaders = function(options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            minimize: options.minimize,
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS
            ? [cssLoader, postcssLoader]
            : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }
        // if (loader === 'less') {
        //     loaders.push({
        //         loader: 'sass-resources-loader'
        //     })
        // }
        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return [MiniCssExtractPlugin.loader].concat(loaders)
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}
