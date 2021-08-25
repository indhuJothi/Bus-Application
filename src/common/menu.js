import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
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
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
