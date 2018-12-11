import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import PropsTypes from 'prop-types'
import api from '@config/api'
import http from '@config/http'
import { Input, Button } from 'antd'
import './Editcard.scss'

class Editcard extends React.Component {
    static propsTypes = {
        clickcancel: PropsTypes.func
    }

    static defaultProps = {
        clickcancel: () => {}
    }
    state = {
        id: null,
        title: '',
        content: ''
    }

    componentDidMount() {
        this.initState()
        // console.log(this.getCardData(), this.state)
    }
    initState() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            content: this.props.content
        })
    }
    handleChange = event => {
        let key = event.target.name
        this.setState({
            [key]: event.target.value
        })
    }
    submit = () => {
        let data = {
            id: this.state.id,
            title: this.state.title,
            content: this.state.content
        }
        http.post(api.editArticle, data).then(res => {
            // this.setState({
            //     data: res.data.data
            // })
        })
    }
    cancel = () => {}
    render() {
        return (
            <div className="editcard">
                <h3>标题</h3>
                <Input
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                    placeholder="标题"
                />
                <h3>正文</h3>
                <textarea
                    className="new-textarea"
                    value={this.state.content}
                    name="content"
                    onChange={this.handleChange}
                />
                <Button
                    className="new-btn"
                    type="primary"
                    onClick={this.submit}
                    style={{ marginRight: '24px' }}
                >
                    提交
                </Button>
                <Button
                    className="new-btn"
                    type="primary"
                    onClick={this.props.clickcancel}
                >
                    取消
                </Button>
            </div>
        )
    }
}

export default Editcard
