import React from 'react'
import logo from './stock_logo.svg';
import Dashboard from "./views/Dashboard";
import Layout from 'Layout';
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
          <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Layout} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>
          {/*<Dashboard/>*/}
        </div>
      </Provider>
    );
  }
}

