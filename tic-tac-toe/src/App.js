import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Grid from './Grid.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TIC-TAC-TOE</h1>
        </header>
        <div className="GridWrapper">
            <Grid />
        </div>
      </div>
    );
  }
}

export default App;



//Get logo to hover with opacity
//When area is clicked have logo stay
//Create method that calculates win
//create reset for game
