import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";


class App extends Component {
  constructor() {
    super()
    this.state = {
      working: true
    }
  }

  handleClick() {
    this.setState({ working: !this.state.working });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo-stop"} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>

        </header>
        <Lamp on />
        <Lamp />
        <Quotes />
        <div>
          <button onClick={() => this.handleClick()}>Stop/Start Working</button>
        </div>

      </div>
    );
  }
}




export default App;