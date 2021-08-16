import React from "react";
import "./logreg.css";
import {Signup } from "./index";
import { Login } from "./login";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Menu from "../bus/search";


class App extends React.Component{
  constructor(props)
  {
    super(props);
    {
      this.state={
       isLogin : true,
       hideapp:true,
       mobileno:" ",
       pass:" "
       }
    this.handle =this.handle.bind(this)
    this.handleSignup=this.handleSignup.bind(this)
    this.showapp = this.showapp.bind(this)
    this.getusermobile=this.getusermobile.bind(this)
    this.getuserpass=this.getuserpass.bind(this)
   
   
  }
 
  }
  showapp(value){
    this.setState(
      {
      hideapp: value
      }
    )
  }
  getusermobile(val){
    this.setState({
      mobileno:val
    })
    
  }
  getuserpass(val){
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
  handleSignup(e){
    e.preventDefault();
    this.setState(
      {
        isLogin : false
      }
    )
  }


  render(){
    const isLogin = this.state.isLogin
    const showapp = this.showapp
    const hideapp = this.state.hideapp
    const isuserlogin= this.props.isuserlogin
    const isuserpass = this.props.isuserpass
    const getusermobile = this.getusermobile
    const getuserpass= this.getuserpass
    const mobileno = this.state.mobileno
    const pass = this.state.pass

  

     return(
    
   <div>

 <div class='MainContainer center'>
     <button onClick ={this.handle} class="button">Login</button>
     <button onClick ={this.handleSignup} class="button">Signup</button>
     <div >
     { isLogin? <Login prop={showapp.bind(this)} getuser={getusermobile.bind(this)} getuserpass={this.getuserpass.bind(this)}/>:<Signup/>}
     {/* <Router>
       <ul>
         <li><Link to='/signup'>Signup </Link> </li> </ul>
       <Switch><Route exact path='/signup' component={Signup}></Route></Switch>
       </Router> */}
       {/* <a href={<Signup/>}>Signup</a> */}
       {/* {isSignup ?<Signup/>: <Login/>} */}
     {hideapp? null : isuserlogin(mobileno,pass)}
   
     </div>
     </div> 
     {hideapp ? null : 
     <Redirect to='/search'></Redirect>}
 
   
     {hideapp? null:isuserlogin(mobileno)}
     {hideapp? null:isuserpass(pass)}
     
      </div>
   

      
     
    )
  }
} 

export default App