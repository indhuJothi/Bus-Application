import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import App from "./UserLogin/loginSingup";
import Ticket from "./ticket";
import Menu from "./menu";
import { userContext } from "../context/context";
import Profile from "./profile/userprofile";
import Common from "./common";
import SeatList from "./seats/seatPage";
import TicketForm from "../bus/TicketForm/ticketForm";
import PrivateRoute from "./private";
import HistoryTable from "../user/userHistory";

class RouteTable extends Component {
  static contextType = userContext;
  constructor() {
    super();
    {
      this.state = {
        isUserLoggedin: false,
        password: "",
        username: "",
        email: "",
        mobile: "",
      };
      this.getPassword = this.getPassword.bind(this);
    }
    if (localStorage.getItem("mobile")) {
      this.setState({
        isUserLoggedin: true,
      });
    }
  }
  getPassword(password, username, email, mobile) {
    this.setState({
      password: password,
      username: username,
      email: email,
      mobile: mobile
    });
  }
  render() {
    let userLoggedin;
    let password, username, email, mobile;
    let getPassword = this.getPassword;
    password = this.state.password;
    username = this.state.username;
    email = this.state.email;
    mobile = this.state.mobile;
    let userDetails = {
      username: username,
      email: email,
      mobile: mobile,
      password:password
    };

    {
      localStorage.getItem("name")
        ? (userLoggedin = true)
        : (userLoggedin = false);
    }
    console.log(userLoggedin);
    return (
      <userContext.Provider value={userDetails}>
        <BrowserRouter>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route
            path="/login"
            render={() => <App isuserpass={getPassword.bind(this)} />}
          />
          <PrivateRoute path="/menu" component={Menu}/>
          <PrivateRoute exact path="/search" component={Common} />
          <PrivateRoute path="/book-seat" component={SeatList} />
          
          <PrivateRoute path="/ticket-form" component={TicketForm} />
          <PrivateRoute path="/ticket" component={Ticket} />
          <PrivateRoute path="/user-history" component={HistoryTable} />
          <PrivateRoute path="/profile" component={Profile} />
        </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default RouteTable;
