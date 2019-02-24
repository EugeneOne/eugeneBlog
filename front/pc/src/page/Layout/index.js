import React, { Component } from 'react'
import { Layout } from 'antd'
import MainHeader from './Header/header'
import Main from './Main/main'
import './inde.scss'
const { Header, Footer, Sider, Content } = Layout

export default class Layouts extends Component {
    render() {
        return (
            <div className="blog">
                <MainHeader />
                <Main />
            </div>
        )
    }
}
