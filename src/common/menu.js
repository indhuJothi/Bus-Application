import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import Search from "../bus/Search/search";
import HistoryTable from "../user/userHistory";
import RouteTable from "./routeprocess";
import "./route.css";
import Common from "./common";

class Menu extends Component {
  render() {
    return (
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
                  to="/user-history"
                >
                  User History
                </NavLink>
              </li>
            </ul>
            {/* <Route path="/search" component={Common}> */}
              
            {/* </Route> */}
            <Route to="/user-history">
              
            </Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default Menu;
