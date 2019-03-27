import React, { Component } from 'react';
import './App.css';
import RangeSlider from './components/RangeSlider/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      set_amount: 0,
      set_months: 0,
      interest_rate: 0,
      monthly_payments: 0,
    }
  }
  // { "interestRate": 0.32, "monthlyPayment": { "amount": 386.0, "currency": "USD" }, "numPayments": 6, "principal": { "amount": 2000.0, "currency": "USD" } }
  handleOnInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  fetchValue=()=>{
    
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        Hello App works
        <RangeSlider
          handleOnInput={this.handleOnInput}
          min={500}
          max={5000}
          id={"set_amount"}
          rs_value={this.state.set_amount}
          display_value={true} />
        <RangeSlider
          handleOnInput={this.handleOnInput}
          min={6}
          max={24}
          id={"set_months"}
          rs_value={this.state.set_months}
          display_value={true} />
        <div>
          <div>
            <h4>{this.fetchValue}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
