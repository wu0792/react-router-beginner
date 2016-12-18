import { Router, Route, RouteLink, IndexLink, browserHistory } from 'react-router'
import App from './app'
import Home from './Home'
import About from './About'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} >
            <IndexLink component={Home} />
            <Route path='about' component={About} />
            <Route path='list' component={List}>
                <Route path=':id' component={Detail} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('')
)