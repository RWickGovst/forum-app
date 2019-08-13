// home.js contains an image — it’s a page we’ll redirect to after login. It’s not authenticated. The username will display with a greeting if they are logged in.
import Navbar from "../components/LoginNavbar/navbar";
import LoginForm from '../components/Login-Form/login-form';
import Signup from '../components/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import React, { Component } from 'react';

class Home extends Component {
    state = {
        loggedIn: false,
        username: null
    }

    // constructor() {
    //     super()
    // }

    updateUser (userObject) {
        this.setState(userObject)
      }

    render() {
        const imageStyle = {
            width: 960
        }
        return (
            <div className="App">
      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

      {/* Greet the user if he/she is logged-in (i.e. loggedIn is true) */}
      {this.state.loggedIn && <p>Join the party, {this.state.username}</p>}
        {/* <Route
        exact path="/"
        component={Home} /> */}

        {/* <Route
        path="/login"
        render={() =>
            <LoginForm
            updateUser={this.updateUser}
            />}
        /> */}

        {/* <Route
        path="/signup"
        render={() =>
            <Signup/>} */}
        <div>
                <p>Social Media Forums</p>
                <img style={imageStyle} src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350" />
            </div>
      </div>
            
        )
    }
}

export default Home;