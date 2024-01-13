import React, { Component } from 'react';

export default class YesOrNo extends Component {
  state = {
    name: "wheelcontainer"
  };

  startRotation = () => {
    const spinTime = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; ;
    const randomStopAngle = Math.floor(Math.random() * 360);

    this.setState({
      name: "wheelcontainer start-rotate"
    });

    setTimeout(() => {
      this.setState({
        name: "wheelcontainer stop-rotate",
        stopAngle: randomStopAngle
      });
    }, spinTime);
  };

  render() {
    return (
      <div className='wheelPage'>
        <div className='wheelComponent'>
        <span className="arrow"></span>
        <div className={this.state.name} style={{ transform: `rotate(${this.state.stopAngle}deg)` }}>
          <div className="yes1">yes</div>
          <div className="no1">No</div>
          <div className="yes2">yes</div>
          <div className="no2">No</div>
          <div className="yes3">yes</div>
          <div className="no3">No</div>
          <div className="yes4">yes</div>
          <div className="no4">No</div>
        </div>
        <button id="spin" onClick={this.startRotation}>
          Spin
        </button>
        </div>
      </div>
    );
  }
}
