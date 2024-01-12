import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="text-center">Let's Make A Decision!</h1>

        <div className="row justify-content-center">
          <div className="col-8">
            <Link to="/restaurants">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                <span className="text-white">Hungry and clueless. Food spot ideas?</span>
              </button>
            </Link>
          </div>

          <div className="col-8 mt-3">
            <Link to="/restaurants">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                <span className="text-white">Is it a Yes or a No?</span>
              </button>
            </Link>
          </div>

          <div className="col-8 mt-3">
            <Link to="/restaurants">
              <button type="button" className="btn btn-primary btn-lg btn-block">
                <span className="text-white">What's my Lucky Number?</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
