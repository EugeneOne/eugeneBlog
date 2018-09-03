import 'babel-polyfill'
import React from 'react'
// import { createStore, bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
//import Routes from './routes'
import { HashRouter } from 'react-router-dom'
import Page from './page'
import './common/common.less'
import day from 'dayjs'

// Create store
// const store = createStore(counter)

window._dayjs = day

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Page />
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
