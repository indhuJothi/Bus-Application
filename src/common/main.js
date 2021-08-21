// import React from 'react';
// import '../index.css'
import logo from "../signlogo.jpg";
// import './main.css'
// import Search from '../bus/Search/search';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

// class Main extends React.Component{

//   constructor()
//      {
//          super()
//          {
//             this.state={
//                 showprofile:false,
//                 showsearch:false,
//                 isLogIn : true
//             }
//          }
//          this.setshowProfile=this.setshowProfile.bind(this)
//          this.show=this.show.bind(this)

//      }
//   setshowProfile()
//   {
//     let res=  !this.state.showprofile
//     this.setState({
//       showprofile : res
//     })
//   }
//   logOut()
//   {

//     const {history}=this.props
//     localStorage.clear()
//     // this.setState({isLogIn:false})
//     if(!history)
//     {
//      history.push("/login")
//     }
//   }
//   show(val)
//   {
//    if(val)
//    {
//        this.setState({
//            showsearch:true
//        })
//     }
//   }

//   render(){
//       const {history} = this.props
//       let setshowProfile= this.setshowProfile
//       let logOut = this.logOut
//       let showProfile=this.state.showprofile
//       let isLogIn =this.state.isLogIn

// return(
//       <div>
//           <div class="body">
//             <div class='header'>
//              <span class='apptitle'>Bus Booking App</span>
//              </div>
//             { localStorage.getItem("name") ?

//                  <a class='logobut' >
//                 {history?null:<button onClick={logOut}> <img src={logo}   class='signuplogo' ></img></button>}
//                     <span class="username">{localStorage.getItem("name")}</span>
//                     <a href='/profile' class="pro" onClick={setshowProfile}>Profile</a>
//                  </a>  : null  }
//                 {showProfile? <Redirect to='/profile'></Redirect>: null}

//         </div>
//       </div>
//   )
//  }
// }

// export default Main

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { userContext } from "../context";

export default function Main() {
  const history = useHistory();
  function setshowProfile() {
   
    console.log(showProfile);
    showProfile = true;
  }

  const [login, setlogin] = useState("Logout");
  const [profile, setprofile] = useState(false);
  let context = useContext(userContext)
  let showProfile = false;
  return (
    <div>
      <div class="body">
        <div class="header">
          <span class="apptitle">Bus Booking App</span>
        </div>
        {localStorage.getItem("name") ? (
          <a class="logobut">
            <span class="username">{context.username}</span>
            <span class="pro" onClick={() => setprofile(true)}>
              Profile
            </span>
            {profile ? <Redirect to="/profile" /> : null}
            <button onClick={()=>setlogin(localStorage.clear(),history.push("/"))} class="signuplogo">
              <p>{login}</p>
            </button>
          </a>
        ) : null}
      </div>
    </div>
  );
}
