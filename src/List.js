import { Link } from 'react-router'
import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='abc'>abc</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/list'>List</Link></li>
                    <li><Link to='/list/3'>Detail</Link></li>
                </ul>
                List:
                {this.props.children}
            </div>
        );
    }
}

export default List;