import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import api from '@config/api'
import http from '@config/http'
import { Input, Button } from 'antd'

class New extends React.Component {
    state = {
        title: '',
        content: ''
    }

    componentDidMount() {
        // this.getArticle(this.props.match.params.id)
        // console.log(this.getCardData(), this.state)
    }
    getArticle(id) {
        http(api.articleDetail, {
            params: {
                id: id
            }
        }).then(res => {
            this.setState({
                data: res.data.data
            })
        })
    }
    getCardData() {
        return {
            id: this.state.data.id || '',
            title: this.state.data.title || '',
            content: this.state.data.content || ''
        }
    }
    handleChange = event => {
        let key = event.target.name
        this.setState({
            [key]: event.target.value
        })
    }
    submit = () => {
        console.log(this.state.title, this.state.content)
    }
    render() {
        return (
            <div className="New">
                <h3>标题</h3>
                <Input
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                    placeholder="标题"
                />
                <h3>正文</h3>
                <Input
                    value={this.state.content}
                    name="content"
                    style={{ height: '100px' }}
                    onChange={this.handleChange}
                    type="textarea"
                    placeholder=""
                />
                <h3> </h3>
                <Button type="primary" onClick={this.submit}>
                    提交
                </Button>
            </div>
        )
    }
}

export default New
