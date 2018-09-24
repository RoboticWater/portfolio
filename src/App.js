import React, { Component } from 'react';
import './App.css';

import MainLinks from './components/MainLinks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="name">
            <span className="john">John</span>
            <span className="britti">Britti</span>
            <span className="blurb">Code. Art. Web. Games.</span>
          </div>
          <MainLinks/>
        </div>
      </div>
    );
  }
}

export default App;
