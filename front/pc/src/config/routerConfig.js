import Home from '@page/Home/home'
import ArticleList from '@page/ArticleList/articleList'
import ArticleDetail from '@page/Article/article'

export default [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/list',
        component: ArticleList
    },
    {
        path: '/article/:id',
        component: ArticleDetail
    }
]
