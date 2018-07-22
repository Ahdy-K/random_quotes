import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteComponent from './QuoteComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1 className="App-title">Random Quotes</h1>
        
        <p className="App-intro">
          
            <QuoteComponent />
          
        </p>
      </div>
    );
  }
}

export default App;
