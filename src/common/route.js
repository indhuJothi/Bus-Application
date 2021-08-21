import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import Search from "../bus/Search/search";
import HistoryTable from "../user/userHistory";
import "./route.css";
import { userContext } from "../context";
import PrivateRoute from "./private";

class Menu extends Component {
  static contextType = userContext;
  constructor() {
    super();
    {
      this.state = {
        center: true,
        isshowsearch: true,
      };
      this.hide = this.hide.bind(this);
    }
  }
  hide() {
    this.setState({
      center: false,
    });
  }

  render() {
    let usermobile = this.props.usermobile;
    let userpass = this.props.userpass;
    let username = this.props.username;
    let useremail = this.props.useremail;
    let userdet = {
      user: username,
      mobile: usermobile,
      password: userpass,
      email: useremail,
    };
    console.log(userdet);
    console.log(usermobile);
    console.log(userpass);
    console.log(username);
    return (
      <div>
        <div>
          <div className="App">
            <Router>
              <ul>
                <li class="li">
                  <NavLink
                    class="link"
                    activeStyle={{ color: "red" }}
                    to="/search-box"
                  >
                    Search
                  </NavLink>
                </li>
                <li class="li">
                  <NavLink
                    class="link"
                    activeStyle={{ color: "red" }}
                    to="/book-history"
                  >
                    User History
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route exact path="/search-box" component={Search} />
                <Route exact path="/book-ticket" render={() => <Search />} />
                <Route
                  exact
                  path="/book-history"
                  component={HistoryTable}
                ></Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
