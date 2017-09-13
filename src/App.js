import React, { Component } from 'react';
import './App.css';
import Board from "./modules/Board/index";

class App extends Component {
  render() {
    return (
      <Board knightPosition={[0, 0]}/>
    );
  }
}

export default App;
