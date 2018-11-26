process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const chalk = require('chalk')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const printBuildError = require('react-dev-utils/printBuildError')
const config = require('../build/webpack.prod.config.js')

// start webpack build
Promise.resolve(build()).then(
    ({ stats, warnings }) => {
        if (warnings.length) {
            console.log(chalk.yellow('Compiled with warnings.\n'))
            console.log(warnings.join('\n\n'))
            console.log(
                '\nSearch for the ' +
                    chalk.underline(chalk.yellow('keywords')) +
                    ' to learn more about each warning.'
            )
            console.log(
                'To ignore, add ' +
                    chalk.cyan('// eslint-disable-next-line') +
                    ' to the line before.\n'
            )
        } else {
            console.log(chalk.green('Compiled successfully.\n'))
        }
    },
    err => {
        console.log(chalk.red('Failed to compile.\n'))
        printBuildError(err)
        process.exit(1)
    }
)

function build() {
    console.log('Creating an optimized production build...')

    const compiler = webpack(config)
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                return reject(err)
            }

            const messages = formatWebpackMessages(stats.toJson({}, true))
            if (messages.errors.length) {
                // Only keep the first error. Others are often indicative
                // of the same problem, but confuse the reader with noise.
                if (messages.errors.length > 1) {
                    messages.errors.length = 1
                }
                return reject(new Error(messages.errors.join('\n\n')))
            }
            return resolve({
                stats,
                warnings: messages.warnings
            })
        })
    })
}
