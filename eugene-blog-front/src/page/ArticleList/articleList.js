import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import api from '@config/api'
import http from '@config/http'

class ArticleList extends React.Component {
    getAllArticle() {
        http(api.getAllArticle).then()
    }
    componentDidMount() {
        this.getAllArticle()
    }
    render() {
        return <div className="articleList">ArticleList</div>
    }
}

export default ArticleList
