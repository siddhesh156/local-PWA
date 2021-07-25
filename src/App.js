import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ForgetPassword from './Components/ForgetPassword';
import Login from './Components/Login';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;