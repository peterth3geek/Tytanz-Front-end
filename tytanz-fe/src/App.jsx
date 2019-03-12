import React, { Component } from 'react';
import './App.scss';
import Hunt from './components/Hunt'

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
