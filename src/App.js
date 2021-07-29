import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ForgetPassword from './Components/ForgetPassword';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import Signup from './Components/Signup';
import Verification from './Components/Verification';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/verification" component={Verification} />
          <Route exact path="/resetPassword" component={ResetPassword} />
          <Route exact path="/signUp" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;