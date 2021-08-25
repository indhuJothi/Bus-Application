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
import Search from "../bus/Search/search";

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
  
    console.log(userDetails)
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
          <PrivateRoute path="/search" component={Common} />
          <PrivateRoute path="/book-seat" component={SeatList} />
          <PrivateRoute path="/search-box" component={Search}/>
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
