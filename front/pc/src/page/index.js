import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Layout from './Layout'
import 'normalize.css'

// 用来获取url的各种参数
@withRouter
class Page extends Component {
    constructor(props) {
        super(props)
        this.pathname = this.props.location.pathname
    }

    render() {
        return <Route path="/" component={Layout} />
    }
}

export default Page
