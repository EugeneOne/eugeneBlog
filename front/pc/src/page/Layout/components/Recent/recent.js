import React, { Component } from 'react'
import './recent.scss'

class Recent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <aside
                className={'recent-profile f-right ' + this.props.propsClass}
            >
                <div className="recent-info">Recent</div>
            </aside>
        )
    }
}

export default Recent
