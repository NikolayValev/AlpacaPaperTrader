import React from 'react'
import logo from './stock_logo.svg';
import Dashboard from "./Dashboard";
import './App.css';
import { Component } from 'react';
import Card from "./components/Card/Card"
const{Provider,Consumer} = React.createContext();

export default class App extends Component {
  state ={
    user: {
      name: 'Ivan Ivanov',
      number: '2018872287'
    }
  }
  render(){
    return (
      <Provider value={this.state}>
        <div className="App">
          <p>Fuck you.</p>
          <Dashboard/>
        </div>
      </Provider>
    );
  }
}

