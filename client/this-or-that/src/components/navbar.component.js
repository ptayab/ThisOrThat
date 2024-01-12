import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/">Home</Link>
                <Link to="/restaurants">Restaurant</Link>
                <Link to="/yesorno"> YesOrNo </Link>
                <Link to="/number"> Number </Link>
                <div>Navbar</div>
            </nav>
        );
    }
}
