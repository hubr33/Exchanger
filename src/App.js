import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import FirstView from "./FirstView/FirstView";
import Main from "./Main/Main";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";

class App extends Component {
  state = {
    scroll: 0,
    active: false,
    value: "",
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <FirstView />
        </div>
        <Main />
        <Portfolio />
        <Footer />
      </Router>
    );
  }
}

export default App;
