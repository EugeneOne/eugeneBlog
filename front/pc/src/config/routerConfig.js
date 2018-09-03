import Home from '@page/Home/home'
import ArticleList from '@page/ArticleList/articleList'
import ArticleDetail from '@page/Article/article'
import New from '@page/New/new'

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
    },
    {
        path: '/new',
        component: New
    }
]
