// import 'babel-polyfill'
import React from 'react'
// import { createStore, bindActionCreators } from 'redux'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
//import Routes from './routes'
import { HashRouter } from 'react-router-dom'
import './common/common.scss'
import day from 'dayjs'
import './index.less'
import Page from './page'

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
if (module.hot) {
    module.hot.accept(() => {
        ReactDom.render(<App />, document.getElementById('root'))
    })
}

ReactDOM.render(<App />, document.getElementById('root'))

// ,
//   "babel": {
//     "presets": [
//       "react-app"
//     ]
//   }
