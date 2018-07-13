import React from 'react'
import { Link, browserHistory } from 'react-router-dom'

class ArticleList extends React.Component {
    getAllArticle() {
        console.log('getAllArticle')
    }
    componentDidMount() {
        this.getAllArticle()
    }
    render() {
        return <div className="articleList">ArticleList</div>
    }
}

export default ArticleList
