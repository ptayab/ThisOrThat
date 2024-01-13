import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="text-center">Time is Ticking: Make your Move!</h1>

        <div>
          <div className='button-container'>
            <Link to="/restaurants" className="text-decoration-none">
            <button type="button" className="decision-button">
                <span>Hungry and Clueless. Food Spot Ideas?</span>
              </button>
            </Link>
          </div>


          <div className='button-container'>
            <Link to="/yesorno">
              <button type="button" className="decision-button">
                <span>Is it a Yes or a No?</span>
              </button>
            </Link>
          </div>

          <div className='button-container'>
            <Link to="/number">
              <button type="button" className="decision-button">
                <span>What's my Lucky Number?</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
