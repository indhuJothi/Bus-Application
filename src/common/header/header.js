import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import "./header.css";
import { userContext } from "../../context/context";

export default function Header() {
  const history = useHistory();
  function setshowProfile(boolean) {
    console.log(showProfile);
    if(boolean===false)
    {
      setprofile(false)
    }
    
  }

  const [login, setlogin] = useState("Logout");
  const [profile, setprofile] = useState(false);
  let context = useContext(userContext);
  let showProfile = false;
  return (
    <div>
      <div class="body">
        <div class="header">
          <span class="apptitle">Bus Booking App</span>
        </div>
        {localStorage.getItem("name") ? (
          <a class="logobut">
            <span class="username">{localStorage.name}</span>
            <span class="pro" onClick={() => setprofile(true)}>
              Profile
            </span>
            {profile ? history.push("/profile") : null}
            <button
              onClick={() => setlogin(localStorage.clear(), history.push("/"))}
              class="signuplogo"
            >
              <p>{login}</p>
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
