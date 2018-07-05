import 'babel-polyfill'
import React from 'react'
// import { createStore, bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
//import Routes from './routes'
import { HashRouter } from 'react-router-dom'
import Page from './page'
import './common/common.less'

// Create store
// const store = createStore(counter)

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
