import React from "react"
import { usercontext } from "../context"
import data from "../user.json"
import logo from'../signlogo.jpg'
import "./userprofile.css"
import { Redirect } from "react-router-dom"

let datajson = data
let contextvalue
let username,usermobile,userpass,useremail
let changeddata
class Profile extends React.Component{
  static contextType = usercontext
    
   constructor(props)
    {
        super(props)
        {
           this.state={
            updatename :" ",
            isupdate:true,
            name:" ",
            email:" ",
            pass:" ",
            mobile:" ",
            isupdatedata:true,
            isinputshow:false,
            isclose:true
           }
        }
        this.getform=this.getform.bind(this)
        this.getname=this.getname.bind(this)
        this.updateuser=this.updateuser.bind(this)
        this.close=this.close.bind(this)
       
    }
    getname(e)
    {
        const name =e.target.name
        const email=e.target.email
        const mobile=e.target.mobile
        const pass=e.target.pass
        this.setState({
            [name] :e.target.value,
            [email]:e.target.value,
            [mobile]:e.target.value,
            [pass]:e.target.pass

        })
        
    }
    updateuser(e)
    {
    
        this.setState({
            isupdatedata:false,
            isinputshow:false
           
         
        })
        console.log(this.state.isupdatedata)
        console.log(username)
       
    }
    getform()
    {
        this.setState({
        isupdate:false,
        isinputshow:true
    })
    console.log(this.state.name)
    }
    close()
    {
        this.setState({
            isclose :false
        })
        
    }
   render(){
    contextvalue =this.context
    username=contextvalue.user
    useremail=contextvalue.email
    usermobile=contextvalue.mobile
    userpass=contextvalue.password
    let isinputshow=this.state.isinputshow
    let isupdatedata=this.state.isupdatedata
    let isclose =this.state.isclose
    let isupdate = this.state.isupdate
    return(
     <div class="profile">
    { isclose?  <><div class='profilepic'>
          <img class="profilelogo" src={logo}></img>
               </div>
         <button onClick={this.getform}>Edit</button>
         <button onClick={this.close}>Close</button>
         <div class="profiledetails">
         {isupdate?<div class="profileinfo"><span>Name: {username}</span></div> : 
         this.state.name===" "?<div class="profileinfo"><span>Name: {username}</span></div>  :
         <div><span>Name:{this.state.name}</span></div>}
        {isupdate? <div class="profileinfo"><span>Email:{useremail}</span></div> : 
         this.state.email===" "?<div class="profileinfo"><span>Email: {useremail}</span></div>  :<div><span>Email: {this.state.email}</span></div>}
        {isupdate? <div class="profileinfo"><span>Mobile:{usermobile}</span></div> :
         this.state.mobile===" "?<div class="profileinfo"><span>Mobile: {usermobile}</span></div>  : <div><span>Mobile: {this.state.mobile}</span></div>}
        {isupdate? <div class="profileinfo"><span>Password:{userpass}</span></div> : 
         this.state.pass===" "?<div class="profileinfo"><span>password: {userpass}</span></div>  :<div><span>Password: {this.state.pass}</span></div>}
        </div>
        {isupdatedata? null : datajson.user.filter(element=>{
             if(element.name===username)
             {
               if((this.state.name!==" ") &&(this.state.name!==username))
                  {
                      element.name=this.state.name
                  }
                if((this.state.email!==" ")&&(this.state.email!==useremail))
                  {
                  element.email=this.state.email
                 }
                if((this.state.mobile!==usermobile) &&(this.state.mobile!==" "))
                  { 
                     element.mobile=this.state.mobile
                 }
                if((this.state.pass!==userpass) &&(this.state.pass!==" "))
                  {
                      element.password=this.state.pass
                  }
                changeddata= element
              }
               console.log(changeddata)
           })
        }

        <div class="updatedetails">
            {isinputshow? <input class="inputdetail" defaultValue={username} type="text" placeholder="Name to Upadte" name="name" onChange={this.getname}/>:null}<br></br>        
            {isinputshow?<input class="inputdetail" defaultValue={useremail} type="text" name="email" placeholder="Email to Update" onChange={this.getname}/>:null}<br></br>
            {isinputshow?<input class="inputdetail"  defaultValue={usermobile}  type="text" name="mobile" placeholder="Mobile No to Update" onChange={this.getname}/>:null}<br></br>
            {isinputshow?<input class="inputdetail" defaultValue={userpass} type="text" name="pass" placeholder="Password to Update" onChange={this.getname}/>:null}<br></br>
            {isinputshow?<button class="inputbutton" onClick={this.updateuser}>Save</button>:null}</div>
            </>:null}
        {isclose? null:<Redirect to="/search"/> }
      </div>        
)}}
    


export default Profile