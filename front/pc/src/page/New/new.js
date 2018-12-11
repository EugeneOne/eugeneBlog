import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import api from '@config/api'
import http from '@config/http'
import { Input, Button } from 'antd'
import Editcard from '@components/Editcard'

class New extends React.Component {
    state = {
        title: '321',
        content: '123'
    }
    render() {
        const state = this.state
        return (
            <div className="New">
                <Editcard title={state.title} content={state.content} />
            </div>
        )
    }
}

export default New
