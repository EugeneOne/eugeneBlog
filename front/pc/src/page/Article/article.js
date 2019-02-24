import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import api from '@config/api'
import http from '@config/http'
import CartItem from '@components/card'

class Article extends React.Component {
    state = {
        data: {}
    }

    componentDidMount() {
        this.getArticle(this.props.match.params.id)
    }
    getArticle(id) {
        http(api.articleDetail, {
            params: {
                id: id
            }
        }).then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    getCardData() {
        return {
            id: this.state.data.id || '',
            title: this.state.data.title || '',
            content: this.state.data.content || '',
            update_time: this.state.data.create_time || ''
        }
    }
    render() {
        return (
            <div className="Article">
                {/* <p>123{this.state.data}</p> */}
                <CartItem
                    id={this.getCardData().id}
                    title={this.getCardData().title}
                    content={this.getCardData().content}
                    updateTime={this.getCardData().update_time}
                />
            </div>
        )
    }
}

export default Article
