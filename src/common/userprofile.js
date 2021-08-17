import React, { useContext } from "react"
import { usercontext } from "../context"
import Getform from "./getform"
import data from "../user.json"
import logo from'../signlogo.jpg'
import "./userprofile.css"

let datajson = data
let user,value
let name,mobile,email,pass
class Profile extends React.Component{
    static contextType = usercontext
    constructor(props)
    {
        super(props)
        {
           this.state={
            updatename :" ",
            isupdate:true,
            name :this.props.username,
            email:this.props.useremail,
            pass:this.props.userpass,
            mobile:this.props.usermobile,
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
    let showform =this.state.showform
    let getname = this.getname
    let usermobile= this.props.usermobile
    let userpass= this.props.userpass
    let username =this.props.username
    let useremail=this.props.useremail
    name =username
    mobile=usermobile
    email=useremail
    pass=userpass
    let isinputshow=this.state.isinputshow
    let isupdatedata=this.state.isupdatedata
    let isclose =this.state.isclose
    // let updatename= this.state.updatename
    let isupdate = this.state.isupdate
    // console.log(name)
    
    return(

    <div class="profile">
 
           
       
 { isclose?  <>
         <div class='profilepic'>
         
          <img class="profilelogo" src={logo}></img>
          </div>
          <button onClick={this.getform}>Edit</button>
          <button onClick={this.close}>Close</button>
        <div class="profiledetails">
     {isupdate?<div class="profileinfo"><span>Name: {username}</span></div> : <div><span>Name: {this.state.name}</span></div>}
     {isupdate? <div class="profileinfo"><span>Email: {useremail}</span></div> : <div><span>Email: {this.state.email}</span></div>}
     {isupdate? <div class="profileinfo"><span>Mobile: {usermobile}</span></div> : <div><span>Mobile: {this.state.mobile}</span></div>}
    {isupdate? <div class="profileinfo"><span>Password: {userpass}</span></div> : <div><span>Password: {this.state.pass}</span></div>}
    </div>
         {isupdatedata? null : datajson.user.filter(element=>{
             let data
             if(element.name===username)
             {
                 if(this.state.name!==" ")
                  element.name=this.state.name
                 if(this.state.email!==" ")
                  element.email=this.state.email
                 if(this.state.mobile!==" ")
                  element.mobile=this.state.mobile
                 if(this.state.pass!==" ")
                  element.password=this.state.pass
                
                 console.log(element.name)
                        
                 console.log(element.email)  
                 console.log(element.password)
                 console.log(element.password)
                 data=element

             }
                console.log(data)
             
         })} 
         
        {/* { isinputshow ? */}
        <div class="updatedetails">
         {isinputshow? <input class="inputdetail"  type="text" placeholder="Name to Upadte" name="name" onChange={this.getname}/>:null}<br></br>        
         {isinputshow?<input class="inputdetail" type="text" name="email" placeholder="Email to Update" onChange={this.getname}/>:null}<br></br>
          {isinputshow?<input class="inputdetail" type="text" name="mobile" placeholder="Mobile No to Update" onChange={this.getname}/>:null}<br></br>
          {isinputshow?<input class="inputdetail" type="text" name="pass" placeholder="Password to Update" onChange={this.getname}/>:null}<br></br>
         {isinputshow?<button class="inputbutton" onClick={this.updateuser}>Save</button>:null}</div>
          {/* : null }  */}

          
          </>:null}
          
           </div>
           
        )}}
    


export default Profile