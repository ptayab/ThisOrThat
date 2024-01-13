import React, { Component } from 'react';


export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimumNumber: 0,
      maximumNumber: 100,
      generatedNumber: null,
    };
  }

  handleMinimumNumberChange = (e) => {
    this.setState({ minimumNumber: e.target.value });
  }

  handleMaximumNumberChange = (e) => {
    this.setState({ maximumNumber: e.target.value });
  }

  generateRandomNumber = () => {
    const { minimumNumber, maximumNumber } = this.state;
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;
    this.setState({ generatedNumber: randomNumber });
  }

  render() {
    return (
      <div className="number-container">
        <div className="circle">{this.state.generatedNumber}</div>
        <div className="number-inputs">
          <input type="number" value={this.state.minimumNumber} onChange={this.handleMinimumNumberChange} />
          <input type="number" value={this.state.maximumNumber} onChange={this.handleMaximumNumberChange} />
        </div>
        <button onClick={this.generateRandomNumber}>Generate</button>
      </div>
    );
  }
}
