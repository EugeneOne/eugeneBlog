import React from 'react'
import { Link, browserHistory } from 'react-router-dom'
import Nav from './nav'
import './header.less'

class Header extends React.Component {
    render() {
        return (
            <div className="blog-header">
                <Nav />
            </div>
        )
    }
}

export default Header
