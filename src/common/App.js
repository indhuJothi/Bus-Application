import React from "react";
import "./logreg.css";
import {Signup } from "./index";
import { Login } from "./login";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import logo from '../signlogo.jpg'
import "./main.css"


let mobileno,pass,username
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
    this.showapp = this.showapp.bind(this)
    this.getusermobile=this.getusermobile.bind(this)
    this.getuserpass=this.getuserpass.bind(this)
  }
 
}

  showapp(value)
  {
    this.setState(
      {
      hideapp: value
      }
    )
  }
  getusermobile(val,val1,val3)
  {
    this.setState({
      mobileno:val,
      username :val1,
      useremail:val3
      
    })
  }
  getuserpass(val)
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
    const showapp = this.showapp
    const hideapp = this.state.hideapp
    const isuserlogin= this.props.isuserlogin
    const isuserpass = this.props.isuserpass
    const isusername=this.props.isusername
    const isuseremail=this.props.isuseremail
    const getusermobile = this.getusermobile
    const getuserpass= this.getuserpass
    username=this.state.username
    mobileno = this.state.mobileno
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
     { isLogin? <Login prop={showapp.bind(this)} getuser={getusermobile.bind(this)} getuserpass={this.getuserpass.bind(this)}/>:<Signup/>}

     </div>
     </div> 
     {hideapp? null:isuserlogin(mobileno)}
     {hideapp? null:isuserpass(pass)}
     {hideapp? null:isusername(username)}
     {hideapp? null:isuseremail(useremail)}
     {hideapp ? null : 
     <Redirect to='/search'></Redirect>}
      </div>
      
    )
  }
} 

export default App