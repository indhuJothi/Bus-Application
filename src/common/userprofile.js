import React from "react";
import { userContext } from "../context";
import data from "../user.json";
import logo from "../signlogo.jpg";
import "./userprofile.css";
import { Redirect } from "react-router-dom";
import Menu from "./route";
import Main from "./main";
import context from "react-bootstrap/esm/AccordionContext";

let datsJson = data;
let contextValue;
let userName, userMobile, userPass, userEmail;
let changedData;
class Profile extends React.Component {
  static contextType = userContext;

  constructor(props) {
    super(props);
    {
      this.state = {
        updatename: " ",
        isupdate: true,
        name: " ",
        email: " ",
        pass: " ",
        mobile: " ",
        isupdatedata: true,
        isinputshow: false,
        isclose:false,
        isopen:false
      };
    }
    this.getForm = this.getForm.bind(this);
    this.getName = this.getName.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.close = this.close.bind(this);
  }
  getName(e) {
    const name = e.target.name;
    const email = e.target.email;
    const mobile = e.target.mobile;
    const pass = e.target.pass;
    this.setState({
      [name]: e.target.value,
      [email]: e.target.value,
      [mobile]: e.target.value,
      [pass]: e.target.pass,
    });
  }
  updateUser(e) {
    this.setState({
      isupdatedata: false,
      isinputshow: false,
    });
    console.log(this.state.isupdatedata);
    console.log(userName);
  }
  getForm() {
    this.setState({
      isupdate: false,
      isinputshow: true,
    });
    console.log(this.state.name);
  }
  close() {
    if(((this.state.name!==contextValue.username) &&(this.state.name===" "))&&
    ((this.state.email!==contextValue.email) &&(this.state.email===" "))&&
    ((this.state.mobile!==contextValue.mobile) &&(this.state.mobile===" "))&&
    ((this.state.pass!==contextValue.password) &&(this.state.pass===" ")))
    {
    this.setState({
      isclose: true,
      isopen:false
    });
  }
 
  else{
    this.setState({
      isclose:false,
      isopen:true
    })
  }
  console.log(contextValue.username)
  }
  render() {
    contextValue = this.context;
    console.log(contextValue);
    userName = contextValue.username;
    userEmail = contextValue.email;
    userMobile = contextValue.mobile;
    userPass = contextValue.password;
    console.log(userPass)
    let isinputShow = this.state.isinputshow;
    let isupdateData = this.state.isupdatedata;
    let isClose = this.state.isclose;
    let isopen =this.state.isopen
    let isUpdate = this.state.isupdate;
    let userDetails={
      username:this.state.name,
      password:this.state.pass,
      email:this.state.email,
      mobile:this.state.mobile
    }
    return (
      <div>
        <Menu />
        <Main />
        <div class="profile">
          
            <>
              <div class="profilepic">
                <img class="profilelogo" src={logo}></img>
              </div>
              <button onClick={this.getForm}>Edit</button>
              <button onClick={this.close}>Close</button>
              <div class="profiledetails">
                {isUpdate ? (
                  <div class="profileinfo">
                    <span>Name: {userName}</span>
                  </div>
                ) : this.state.name ===" " ? (
                  <div class="profileinfo">
                    <span>Name: {userName}</span>
                  </div>
                ) : (
                  <div>
                    <span>Name:{this.state.name}</span>
                  </div>
                )}
                {isUpdate ? (
                  <div class="profileinfo">
                    <span>Email:{userEmail}</span>
                  </div>
                ) : this.state.email === " " ? (
                  <div class="profileinfo">
                    <span>Email: {userEmail}</span>
                  </div>
                ) : (
                  <div>
                    <span>Email: {this.state.email}</span>
                  </div>
                )}
                {isUpdate ? (
                  <div class="profileinfo">
                    <span>Mobile:{userMobile}</span>
                  </div>
                ) : this.state.mobile === " " ? (
                  <div class="profileinfo">
                    <span>Mobile: {userMobile}</span>
                  </div>
                ) : (
                  <div>
                    <span>Mobile: {this.state.mobile}</span>
                  </div>
                )}
                {isUpdate ? (
                  <div class="profileinfo">
                    <span>Password:{userPass}</span>
                  </div>
                ) : this.state.pass === " " ? (
                  <div class="profileinfo">
                    <span>password: {userPass}</span>
                  </div>
                ) : (
                  <div>
                    <span>Password: {this.state.pass}</span>
                  </div>
                )}
              </div>
              {isupdateData
                ? null
                : datsJson.user.filter((element) => {
                    if (element.name === userName) {
                      if (
                        this.state.name !== " " &&
                        this.state.name !== userName
                      ) {
                        element.name = this.state.name;
                        localStorage.name = this.state.name;
                      }
                      if (
                        this.state.email !== " " &&
                        this.state.email !== userEmail
                      ) {
                        element.email = this.state.email;
                        localStorage.email = this.state.email;
                      }
                      if (
                        this.state.mobile !== userMobile &&
                        this.state.mobile !== " "
                      ) {
                        element.mobile = this.state.mobile;
                        localStorage.mobile = this.state.mobile;
                      }
                      if (
                        this.state.pass !== userPass &&
                        this.state.pass !== " "
                      ) {
                        element.password = this.state.pass;
                        contextValue = this.state.pass;
                      }
                      changedData = element;
                    }
                    console.log(changedData);
                  })}

              <div class="updatedetails">
                {isinputShow ? (
                  <input
                    class="inputdetail"
                    defaultValue={userName}
                    type="text"
                    placeholder="Name to Upadte"
                    name="name"
                    onChange={this.getName}
                  />
                ) : null}
                <br></br>
                {isinputShow ? (
                  <input
                    class="inputdetail"
                    defaultValue={userEmail}
                    type="text"
                    name="email"
                    placeholder="Email to Update"
                    onChange={this.getName}
                  />
                ) : null}
                <br></br>
                {isinputShow ? (
                  <input
                    class="inputdetail"
                    defaultValue={userMobile}
                    type="text"
                    name="mobile"
                    placeholder="Mobile No to Update"
                    onChange={this.getName}
                  />
                ) : null}
                <br></br>
                {isinputShow ? (
                  <input
                    class="inputdetail"
                    defaultValue={userPass}
                    type="text"
                    name="pass"
                    placeholder="Password to Update"
                    onChange={this.getName}
                  />
                ) : null}
                <br></br>
                {isinputShow ? (
                  <button class="inputbutton" onClick={this.updateUser}>
                    Save
                  </button>
                ) : null}
              </div>
            </>
          
          {isopen ?<userContext.Provider value={userDetails}>
                  <Redirect to="/"></Redirect>
                </userContext.Provider> : null}
          
          
          {isClose ?<Redirect to="/search" /> :null}
       
        </div>
      </div>
    );
  }
}

export default Profile;
