import React from 'react'
import { Link, browserHistory, withRouter } from 'react-router-dom'
import './main.scss'
import Aside from '../components/Aside/aside'
import HomeSide from '../components/HomeSide/homeside'
import routerConfig from '@config/routerConfig'
import Route from 'react-router-dom/Route'

@withRouter
class Main extends React.Component {
    state = {
        rightFixed: ''
    }
    componentDidMount() {
        let isFixed = false
        window.addEventListener('scroll', event => {
            if (document.documentElement.scrollTop >= 40) {
                isFixed = 'fixed'
            } else {
                isFixed = ''
            }
            this.setState({
                rightFixed: isFixed
            })
        })
    }
    render() {
        return (
            <div className="blog_main">
                {/* <Aside /> */}
                <div className="router-wrap">
                    {routerConfig.map((item, i) => (
                        <Route
                            key={i}
                            path={item.path}
                            component={item.component}
                            exact
                        />
                    ))}
                </div>
                <div className="home_side_box">
                    <HomeSide propsClass={this.state.rightFixed} />
                </div>
            </div>
        )
    }
}

export default Main
