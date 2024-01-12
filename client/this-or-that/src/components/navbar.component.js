import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#a0c4ff'}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/restaurants">Restaurant</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/yesorno">YesOrNo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/number">Number</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
