import React from "react";
import "./logreg.css";
import data from "../../user.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import { withRouter } from "react-router";
import PrivateRoute from "../private";

let pushData;
export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mobile: "",
      password: " ",
      confirmpassword: " ",
      emailerr: "",
      passerr: "",
      mobileerr: "",
      confirmpasserr: "",
      res: true,
      alert: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const mobile = event.target.name;
    const password = event.target.password;
    const email = event.target.email;
    const confirmpassword = event.target.confirmpassword;
    this.setState({
      [email]: event.target.value,
      [mobile]: event.target.value,
      [password]: event.target.value,
      [confirmpassword]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let emailres = true;
    let mobileres = true;
    let passwordres = true;
    let confirmpassres = true;
    let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z.]+$/;
    let mobileregex = /^[6-9]\d{9}$/;
    let passregex = /^[a-zA-Z0-9@\s]{3,15}$/;

    if (emailregex.test(this.state.email)) {
      emailres = false;
      this.setState({
        emailerr:" "
      })
    } else {
      emailres = true;
      this.setState({
        emailerr: "Enter a valid email",
      });
    }
    if (mobileregex.test(this.state.mobile)) {
      mobileres = false;
      this.setState({
        mobileerr:" "
      })
    } else {
      mobileres = true;
      this.setState({
        mobileerr: "Enter a valid mobile",
      });
    }
    if (passregex.test(this.state.password)) {
      passwordres = false;
      this.setState({
        passerr:" "
      })
    } else {
      passwordres = true;
      this.setState({
        passerr: "Enter a valid password",
      });
    }
    if(this.state.confirmpassword===" ")
    {
      confirmpassres=true
      this.setState({
        confirmpasserr:"Please Enter Your Password"
      })
    }
    else if (this.state.password === this.state.confirmpassword) {
      confirmpassres = false;
      this.setState({
        confirmpasserr:" "
      })
    }
   
    else{
      confirmpassres = true;
      this.setState({
        confirmpasserr: "password are not same",
      });
    } 
    
    
    if((emailres||mobileres||passwordres||confirmpassres) ===false) {
      const getAlert = () => (
        <SweetAlert
          success
          title="!"
          onConfirm={() => this.hideAlert()}
        >
          You are signed in successfully
          <p>You can now Login</p>
        </SweetAlert>
      );
      this.setState({
        res: false,
        alert: getAlert(),
      });
     
      
    }
  }
  hideAlert() {
    console.log("Hiding alert...");
    this.setState({
      alert: null,
    });
  }
  componentDidUpdate() {
    pushData = {
      email: this.state.email,
      mobile: parseInt(this.state.mobile),
      password: this.state.password,
      name: "Jothi",
    };
    data.user.push(pushData);
    console.log(data);
  }

  render() {
    let res = this.state.res;
    console.log(data);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="base-container">
            <div className="formheader">Signup</div>
            <div className="form">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.emailerr}</div>
              </div>
              <div>
                <label htmlFor="Mobile">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="MobileNo"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.mobileerr}</div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.passerr}</div>
              </div>
              <div>
                <label htmlFor="confirmpassword">Password</label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="confirm password"
                  onChange={this.handleChange}
                />
                <div class="error">{this.state.confirmpasserr}</div>
              </div>
            </div>
            <div>
              <input type="submit" class="submitbtn"></input>
            </div>
          </div>
        </form>
        {this.state.alert}
      </div>
    );
  }
}
