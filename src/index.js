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
      <Route path='' component={Home} />
      <Route path='about' component={About} />
      <Route path='list' component={List}>
        <Route path='/list/:id' component={Detail} />
      </Route>
    </Route>
    <Route path='list2' component={List}>
      <Route path='/list2/:id' component={Detail} />
    </Route>
    <Route path='/list3/:id' component={Detail} />
  </Router>,
  document.getElementById('root')
)
