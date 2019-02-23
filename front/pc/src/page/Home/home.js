import React from 'react'
import CartItem from '@components/card'
import { Link, browserHistory, withRouter } from 'react-router-dom'
import http from '@config/http'
import api from '@config/api'
import './home.scss'

@withRouter
class Home extends React.Component {
    state = {
        itemList: []
    }
    getAllArticle() {
        http(api.getAllArticle).then(res => {
            this.setState({
                itemList: res.data
            })
        })
    }
    componentDidMount() {
        this.getAllArticle()
    }
    clickToDetail = value => {
        var data = { id: 3, name: 'sam', age: 36 }
        this.props.history.push({
            pathname: '/article/' + value
        })
    }
    render() {
        const list = this.state.itemList
        const cardItem = list.map((item, i) => (
            <CartItem
                key={i}
                id={item.id}
                title={item.title}
                content={item.content}
                clickToDetail={this.clickToDetail}
                isMore={true}
                isFold={true}
            />
        ))
        return <div className="home-content">{cardItem}</div>
    }
}

export default Home
