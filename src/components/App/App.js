import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
            <Nav  />
        <br/>
        <p>Pizza is great.</p>
      </div>
    );
  }
}

export default App;
