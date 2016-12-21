import { Link } from 'react-router'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App</h2>
        </div>
        <ul>
          <li><Link to='abc'>abc</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/list'>List</Link></li>
          <li><Link to='/list/3'>Detail</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
