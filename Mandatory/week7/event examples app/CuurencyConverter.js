import React, { Component } from 'react';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };
  }

  handleInputChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Synthetic event
    const euroRate = 0.011; // Assume 1 INR = 0.011 EUR
    const euros = this.state.rupees * euroRate;
    this.setState({ euros: euros.toFixed(2) });
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleInputChange}
          />{' '}
          <button type="submit">Convert</button>
        </form>

        {this.state.euros !== null && (
          <p>Converted Amount: €{this.state.euros}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
