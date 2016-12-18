import { Router, Route, IndexLink, RouteLink, browserHistory } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import About from './About'
import List from './List'
import Detail from './Detail'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App} >
      <IndexLink component={Home} />
      <Route path='about' component={About} />
      <Route path='list' component={null}>
        <Route path='/list/:id' component={Detail} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
