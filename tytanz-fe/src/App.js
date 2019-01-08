import React, { Component } from 'react';
import './App.css';
import Hunt from './components/hunt'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Hunt />
        </header>
      </div>
    );
  }
}

export default App;
