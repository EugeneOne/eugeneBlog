import React, { Component } from 'react'
import './aside.less'
import api from '@config/api'
import http from '@config/http'

class Aside extends Component {
    state = {
        name: '',
        title: '',
        location: ''
    }
    getUserInfo() {
        http(api.getUserinfo).then(res => {
            const data = res.data.data
            this.setState({
                name: data.name,
                title: data.title,
                location: data.location
            })
        })
    }
    componentDidMount() {
        this.getUserInfo()
    }
    render() {
        return (
            <aside className="aside-profile f-left">
                <div className="aside-info">
                    <div className="user-photo" />
                    {/* <h2 className="name">{this.state.name}</h2>
                    <h3 className="title">{this.state.title}</h3>
                    <div className="location">{this.state.location}</div> */}
                    {Object.keys(this.state).map(item => (
                        <h3 className={item}>{this.state[item]}</h3>
                    ))}
                </div>
            </aside>
        )
    }
}

export default Aside
