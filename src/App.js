import React, { Component } from 'react'
import './App.css'
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App