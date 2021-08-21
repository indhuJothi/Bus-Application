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

let password;
class RouteTable extends Component {
  constructor() {
    super();
    {
      this.state = {
        isUserLoggedin: false,
        password: " ",
      };
      this.getPassword = this.getPassword.bind(this);
    }
    if (localStorage.getItem("mobile")) {
      this.setState({
        isUserLoggedin: true,
      });
    }
  }
  getPassword(val) {
    this.setState({
      password: val,
    });
  }
  render() {
    let userLoggedin;
    let getPassword = this.getPassword;
    password = this.state.password;
    console.log(password);

    {
      localStorage.getItem("name")
        ? (userLoggedin = true)
        : (userLoggedin = false);
    }
    console.log(userLoggedin);
    return (
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
    );
  }
}

export default RouteTable;
