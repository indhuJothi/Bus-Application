
import React from "react";
import './logreg.css'
import validatelogin  from '../service/service' ;
import { getpassword } from "../service/service";
import { getmobile } from "../service/service";
import { getusername } from "../service/service";
import { getuseremail } from "../service/service";
import { Link, Redirect, Route, Router, Switch } from "react-router-dom";
import Search from "../bus/search";
// let boolean
let username,useremail
 export class Login extends React.Component {
  constructor(props) {
   
    super(props);
    this.state={
      mobile:" ",
      password:" ",
      boolean : false,
      logform : true,
      showapp : this.props.prop,
      res : false,
      mobileerr:"",
      passerr:"",
      username:" ",
      useremail:" "
      
     
    }
  
    this.handleChange = this.handleChange.bind(this)
    this.submit=this.submit.bind(this)
  }
  handleChange(event){
    const mobile= event.target.name
    const password=event.target.password
    

    this.setState({
     [mobile]:event.target.value,
      [password]:event.target.value,
    
    })

  
  }
  

  submit(e){
      let result,password,mobile
            e.preventDefault()
           
         result= validatelogin (this.state.mobile,this.state.password)
       
       
      if(result){
         this.setState(
             {
               boolean:true,
               logform:false,
               res : true,
               
               
             }
            
           ) 
           localStorage.setItem('document',JSON.stringify([this.state.mobile,this.state.password]));
       
          }
        password =getpassword(this.state.mobile,this.state.password)
      
       
        if(password!=this.state.password)
        {
            this.setState(
              {
              passerr :"Enter a valid password"
              }
            )
        }
        mobile = getmobile(this.state.mobile,this.state.password)
        if(mobile!=this.state.mobile){
          this.setState(
            {
            mobileerr :"Enter a valid mobile number"
            }
          )
        }
      }
      componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
     
        if (localStorage.getItem('document')) {
            this.setState({
                mobile: this.documentData.mobile,
                password: this.documentData.password,
              
        })
    } else {
        this.setState({
            title: '',
            description: '',
            price: ''
        })
    }
    }
  render() {
    let boolean = this.state.boolean
    let logform = this.state.logform
    let hideapp = this.props.prop
    let getuser = this.props.getuser
    let getuserpass=this.props.getuserpass
    username =getusername(this.state.mobile)
    useremail=getuseremail(this.state.mobile)
    console.log(useremail)
    let res = this.state.res
   let isuserlogin=this.props.isuserlogin

    return (

     <div>
    {res ? hideapp(false): null}
    {res?getuser(this.state.mobile,username,useremail):null}
    {res?getuserpass(this.state.password):null}
    
 
    <form onSubmit={this.submit}>
      <div className="base-container">
        <div className="formheader">Login</div>
          <div className="form">
            <div>
              <label htmlFor="Mobile">Mobile</label>
              <input type="text" name="mobile" placeholder="MobileNo" onChange={this.handleChange}  />
              <div class='error'>{this.state.mobileerr}</div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={this.handleChange}  />
              <div class='error'>{this.state.passerr}</div>
            </div>
          </div>
         <div>
          <input type="submit" class="submitbtn"></input>
        </div>
      </div>
      </form>
  

     </div>
    );
  }
}
