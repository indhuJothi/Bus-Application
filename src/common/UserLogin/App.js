import React from "react";
import "./logreg.css";
import {SignUp } from "./index";
import { Login } from "./login";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import logo from '../../signlogo.jpg'
import "../main.css"


let mobileNo,pass,userName
class App extends React.Component{
  
 constructor(props)
  
  {
    super(props);
    {
      this.state={
       isLogin : true,
       hideapp:true,
       mobileno:" ",
       pass:" ",
       username:" ",
       useremail:" "
      
       }
    this.handle =this.handle.bind(this)
    this.handleSignup=this.handleSignup.bind(this)
    this.showApp = this.showApp.bind(this)
    this.getUsermobile=this.getUsermobile.bind(this)
    this.getUserpass=this.getUserpass.bind(this)
  }
 
}

  showApp(value)
  {
    this.setState(
      {
      hideapp: value
      }
    )
  }
  getUsermobile(val,val1,val3)
  {
    this.setState({
      mobileno:val,
      username :val1,
      useremail:val3
      
    })
  }
  getUserpass(val)
  {
    this.setState({
      pass:val
    })
    
  }
  handle()
  {
    
   this.setState(
     
         { 
         isLogin : true
         }
    )
  }
  handleSignup(e)
  {
    e.preventDefault();
    this.setState(
      {
        isLogin : false
      }
    )
  }
componentDidMount()
{
  this.setState({
  user:{
     userid: this.state.mobile,
     pass :this.state.pass
  }})
}
  render(){
    const isLogin = this.state.isLogin
    const showApp = this.showApp
    const hideapp = this.state.hideapp
    const isuserlogin= this.props.isuserlogin
    const isuserpass = this.props.isuserpass
    const isusername=this.props.isusername
    const isuseremail=this.props.isuseremail
    const getUsermobile = this.getUsermobile
    const getUserpass= this.getUserpass
    userName=this.state.username
    mobileNo = this.state.mobileno
    pass =this.state.pass
    let useremail=this.state.useremail
    
 return(   
   <div>
      <div class="body"> 
        <div class='header'>   
          <span class='apptitle'>Bus Booking App</span> 
             </div>                  
               <a class='logobut' >
                 <button>
                  <img src={logo}   class='signuplogo' ></img></button>
                  <span class="username"></span> 
              </a> 
         </div>               
     <div class='MainContainer center'>
     <button onClick ={this.handle} class="button">Login</button>
     <button onClick ={this.handleSignup} class="button">Signup</button>
     <div >
     { isLogin? <Login prop={showApp.bind(this)} getuser={getUsermobile.bind(this)} getuserpass={this.getUserpass.bind(this)}/>:<SignUp/>}

     </div>
     </div> 
     {hideapp? null:isuserlogin(mobileNo)}
     {hideapp? null:isuserpass(pass)}
     {hideapp? null:isusername(userName)}
     {hideapp? null:isuseremail(useremail)}
     {hideapp ? null : 
     <Redirect to='/search'></Redirect>}
      </div>
      
    )
  }
} 

export default App