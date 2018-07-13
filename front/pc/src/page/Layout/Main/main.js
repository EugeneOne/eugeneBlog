import React from 'react'
import { Link, browserHistory, withRouter } from 'react-router-dom'
import './main.less'
import Aside from '../components/aside'
import Recent from '../components/Recent/recent'
import routerConfig from '@config/routerConfig'
import Route from 'react-router-dom/Route'

@withRouter
class Main extends React.Component {
    render() {
        return (
            <div className="blog-main clearfix">
                <Aside />
                <div className="router-wrap f-left">
                    {routerConfig.map((item, i) => (
                        <Route
                            key={i}
                            path={item.path}
                            component={item.component}
                            exact
                        />
                    ))}
                </div>
                <Recent />
            </div>
        )
    }
}

export default Main
