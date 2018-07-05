import React from 'react'
// Index Routes 允许你为父 route 提供一个默认的 "child"
import { HashRouter, Route, IndexRoute, HashRouter } from 'react-router-dom'
import App from '@components/base'
import Welcom from './welcome'

const Home = (location, cb) => {
    require.ensure(
        [],
        require => {
            cb(null, require('@page/home/home').default)
        },
        'home'
    )
}

export default () => (
    <HashRouter history={HashRouter}>
        <Route path="/" component={App}>
            <IndexRoute component={Welcom} />
            <Route path="/home" getComponent={Home} />
        </Route>
    </HashRouter>
)
