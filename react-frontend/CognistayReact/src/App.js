import './App.css';
import React, { Component } from 'react';
import './bootstrap.css';
import CogniStay from './components/ohrrs/CogniStay';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <CogniStay/>
      </div>
    );
  }
}

export default App;
