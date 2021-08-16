import React from "react";
import './logreg.css'
import data from '../user.json'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from '../common/App'
import { Login } from "./login";
import Loginpage from "./loginpage";
let pushdata
let email,mobile,password
 export class Signup extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state={
      email :'',
      mobile:"",
      password:" ",
      confirmpassword:" ",
      emailerr :"",
      passerr:"",
      mobileerr:"",
      confirmpasserr:"",
      res:true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlesubmit=this.handlesubmit.bind(this)
  }

  handleChange(event){
    const mobile= event.target.name
    const password=event.target.password
    const email= event.target.email
    const confirmpassword = event.target.confirmpassword
    this.setState({
      [email]:event.target.value,
      [mobile]:event.target.value,
      [password]:event.target.value,
      [confirmpassword]:event.target.value
    })
  }
  
  handlesubmit(e)
  { 
     e.preventDefault()
    
      let emailres=true
      let mobileres=true
      let passwordres=true
      let confirmpassres=true

      let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z.]+$/
      let mobileregex = /^[6-9]\d{9}$/
      let passregex=/^[a-zA-Z0-9@\s]{3,15}$/
    
      if(emailregex.test(this.state.email))
      {
        emailres= false
      }
      else
      {
        emailres=true
        this.setState({
             emailerr: "Enter a valid email"
        })
      }
      if(mobileregex.test(this.state.mobile))
      {
        mobileres=false
      }
      else{
        mobileres=true
        this.setState({
          mobileerr :"Enter a valid mobile"
        })
      }
      if(passregex.test(this.state.password)){
        passwordres=false
      }
      else{
        passwordres=true
        this.setState({
          passerr :"Enter a valid password"
        })
      }
     if(this.state.password===this.state.confirmpassword){
      confirmpassres=false
     }
     else {
       confirmpassres=true
       this.setState({
        confirmpasserr:"password are not same"
       })
     }
     if((emailres) || (mobileres) ||(passwordres) ||(confirmpassres) === false)
     {
        //  data.user.push(pushdata)
         this.setState({
           res:false
         })

         alert("Registered successfully you can now login")
      
        
        
     }
     else {
       alert("No")
     }
    
   
  }
  componentDidUpdate()
   {
    pushdata = {
      email: this.state.email,
      mobile:parseInt(this.state.mobile),
      password:this.state.password
    }
     data.user.push(pushdata)
     console.log(data)
   }
    
  render() {
    console.log(data)
  
    // let emailerr = this.state.emailerr
    // let mobileerr = this.state.mobileerr
    // let passerr = this.state.passerr
    // let confirmpasserr = this.state.confirmPasserr
    return (
      <div>
       
       {this.state.res? <form onSubmit={this.handlesubmit}>
      <div className="base-container">
        <div className="formheader">Signup</div>
          <div className="form">
          <div>
              <label htmlFor="email">Mobile</label>
              <input type="text" name="email" placeholder="email" onChange={this.handleChange}  />
              <div class='error'>{this.state.emailerr}</div>
            </div>
            <div>
              <label htmlFor="Mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="MobileNo" onChange={this.handleChange}  />
              <div class='error'>{this.state.mobileerr}</div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password"  onChange={this.handleChange}  />
              <div class='error'>{this.state.passerr}</div>
            </div>
            <div>
              <label htmlFor="confirmpassword">Password</label>
              <input type="text" name="confirmpassword" placeholder="confirm password" onChange={this.handleChange}  />
              <div class='error'>{this.state.confirmpasserr}</div>
            </div>
          </div>
         <div>
          <input type="submit" class="submitbtn"></input>
        </div>
      </div>
      </form> :null}
      {/* {this.state.res? null :
        <Router>
        <Link to='/'></Link>
      <Link to='/login'/>
     <Route path='/'><Redirect to='/login'></Redirect></Route>
       <Route path="/login" render={() => <Login/>} /></Router>}  */}
   
      {/* {res ? <Loginpage/>:null } */}
      </div>
    );
  }
}

