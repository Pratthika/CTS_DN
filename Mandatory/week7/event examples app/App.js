import React, { Component } from 'react';
import CurrencyConverter from './CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Binding 'this'
    this.incrementCounter = this.incrementCounter.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  incrementCounter() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    alert("Hello! This is a static message after increment.");
  }

  handleWelcome(message) {
    alert(`Welcome message: ${message}`);
  }

  handleClick(event) {
    alert("I was clicked!");
    console.log("Synthetic event object:", event);
  }

  render() {
    return (
      <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React Event Handling Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCounter}>Increment</button>{' '}
        <button onClick={this.decrementCounter}>Decrement</button>

        <hr />

        <button onClick={() => this.handleWelcome("Welcome to the event lab!")}>
          Say Welcome
        </button>

        <hr />

        <button onClick={this.handleClick}>OnPress</button>

        <hr />

        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
