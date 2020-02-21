import React, { Component } from 'react';
import './App.scss';
import Home from './views/home/home';

class App extends Component {
  render() {
    return (
      <div className="Website">
        <Home/>
      </div>
    )
  }
}

export default App;
