import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import Search from "../bus/Search/search";
import "./route.css";



class Menu extends Component {
render() {
  console.log("Hi")
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
                    to="/user-history"
                  >
                    User History
                  </NavLink>
                </li>
              </ul>
              <Switch>
                <Route exact path="/search-box" component={Search} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
