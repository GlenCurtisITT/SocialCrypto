import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TopCrypto from './components/TopCrypto'

class App extends Component {

  render() {
    return (
      <TopCrypto />
    );
  }
}

export default App;
