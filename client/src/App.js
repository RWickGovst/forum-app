import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages for router
// import Delete from './pages/Delete';
import FindId from './pages/FindId';
import Home from './pages/Home';
import LoginHome from './pages/LoginHome';
import Signup from './components/Signup/Signup';
import LoginForm from './components/Login-Form/login-form';

class App extends Component {
  state = {
    loggedIn: false,
    username: null
}

updateUser = (userObject) => {
  console.log(userObject)
  // this.setState({
  //   loggedIn: userObject.loggedIn,
  //   username: userObject.username
  // })
  this.setState({
    loggedIn: userObject.loggedIn,
    username: userObject.username
  });
  console.log(this.state)
 window.redirect = '/home'
}

  render () {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={LoginHome} />
        <Route path='/home' component={Home} />
        <Route exact path='/find' component={FindId} />
        <Route path="/signup" render={() => <Signup/>} />
        <Route path="/login" render={() => <LoginForm updateUser={this.updateUser}/>} />
         {/* <Route exact path='/delete/:id' component={Delete} />  */}
​
      </Router>
    </div>
  );
  }
}

export default App;