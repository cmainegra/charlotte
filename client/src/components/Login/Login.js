import React, { Component } from "react";
import API from "../../utils/API";
import { Button } from 'react-bootstrap';

class Login extends Component {
    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        API.registerUser(event.target.email.value, event.target.password.value)
        .then( response => {
          console.log(response.data);
          window.location = "/thank-you";
        } )
        .catch( error => {
          console.log(error);
        });
        console.log("submitted");
      }
      render() {
        return (
          <div className="sign-up-wrapper">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <Button bsStyle="primary" type="submit">Sign In</Button>
              <br />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <Button bsStyle="primary" type="submit">Register</Button>
            </form>
          </div>
        );
      }
    }


export default Login;