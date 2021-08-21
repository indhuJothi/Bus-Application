import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { useHistory } from "react-router";
import App from "./UserLogin/App";
import Search from "../bus/Search/search";
import Ticket from "./ticket";
import Menu from "./route";
import TableData from "../bus/busPage/buslistTable";
import { userContext } from "../context";
import Profile from "./userprofile";
import Common from "./common";
import { busContext } from "../busContext";
import SeatList from "./seats/seatPage";
import TicketForm from "../bus/TicketForm/ticketForm";
import PrivateRoute from "./private";
import HistoryTable from "../user/userHistory";

let password,username,email,mobile;
class RouteTable extends Component {
  static contextType = userContext
  constructor() {
    super();
    {
      this.state = {
        isUserLoggedin: false,
        password: " ",
        username:" ",
        email:" ",
        mobile:" "
      };
      this.getPassword = this.getPassword.bind(this);
    }
    if (localStorage.getItem("mobile")) {
      this.setState({
        isUserLoggedin: true,
      });
    }
  }
  getPassword(val,val2,val3,val4) {
    this.setState({
      password: val,
      username:val2,
      email:val3,
      mobile:val4

    });
  }
  render() {
    let userLoggedin;
    let getPassword = this.getPassword;
    password = this.state.password;
    username=this.state.username
    email=this.state.email
    mobile=this.state.mobile
    console.log(password);
    console.log(username);
    console.log(email)
    console.log(mobile)
    let userDetails={
      username:username,
      password:password,
      email:email,
      mobile:mobile
    }

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
          <PrivateRoute exact path="/search" component={Common} />
          <PrivateRoute  path="/book-seat" component={SeatList} />

          <PrivateRoute  path="/profile" component={Profile} />
          <PrivateRoute  path="/ticket-form" component={TicketForm} />
          <PrivateRoute  path="/ticket" component={Ticket} />
          <PrivateRoute  path="/user-history" component={HistoryTable} />
        
      </BrowserRouter>
      </userContext.Provider>
    );
  }
}

export default RouteTable;
