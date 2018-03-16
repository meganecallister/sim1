import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      inventory: [{
        productName: 'T-Shirt',
        productPrice: '14',
        productImage: 'https://img.michaels.com/L6/3/IOGLO/873480063/212543238/10093626_r.jpg?fit=inside|1024:1024'
      }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      <Dashboard
        inventory = {this.state.inventory }/>
      <Form/>
      <Header/>  

      </div>
      
    );
  }
}

export default App;
