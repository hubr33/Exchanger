import React, { Component } from "react";
import "./App.css";

const currencyOne = document.querySelector(".amount-one");

class App extends Component {
  state = {
    amount1: 0,
    rate: "PLN",
    rate2: "",
    result1: "0.00",
    result2: "0.00",
    valueOfRate: "",
  };

  handleExchanger = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.rate}`)
      .then((response) => response.json())
      .then((data) => {
        const value1 = document.getElementById("exchange").value;
        const value2 = document.getElementById("exchange2").value;
        const rateValue = data.rates[value2];
        this.setState({
          rate: value1,
          rate2: value2,
          valueOfRate: parseFloat(rateValue.toFixed(2)),
        });
        this.handleInput();
      });
  };

  handleInput = () => {
    const inputValue = document.querySelector(".amount-one").value;
    if (inputValue !== "") {
      this.setState((prevState) => ({
        result1: inputValue,
        result2: (this.state.valueOfRate * parseFloat(inputValue)).toFixed(2),
      }));
    } else {
      this.setState({
        result1: "0.00",
        result2: "0.00",
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h1 className="title">Exchange Rate App</h1>
          <div className="leftSide">
            <input
              max={this.state.count}
              type="number"
              className="amount-one"
              onChange={() => this.handleInput()}
            />
            <select id="exchange" onChange={this.handleExchanger}>
              <option value="PLN" selected>
                PLN
              </option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <p className="result">
            {this.state.result1} {this.state.rate}
          </p>
          <div className="rightSide">
            <select id="exchange2" onChange={this.handleExchanger}>
              <option value="" selected disabled>
                ---
              </option>
              <option value="PLN">PLN</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <p className="result2">
            {this.state.result2} {this.state.rate2}
          </p>
          <p className="equals">=</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
