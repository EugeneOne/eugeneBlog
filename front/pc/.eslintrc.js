module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    extends: [
        'standard',
        // 包含大部分vue代码校验
        'plugin:vue/recommended',
        // 配合prettier插件和eslint-config-prettier 插件和eslint-plugin-prettier插件使用
        'plugin:prettier/recommended'
    ],
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/max-attributes-per-line': 'off',
        'vue/no-side-effects-in-computed-properties': 'off'
    }
}