import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hunt from './components/hunt'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Hi there!
        <Hunt />
        </header>
      </div>
    );
  }
}

export default App;
