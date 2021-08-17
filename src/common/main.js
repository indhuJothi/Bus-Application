import React, { useContext } from 'react';
import '../index.css'
import logo from'../signlogo.jpg'
import './main.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import Historytable from '../user/historytable';
import Search from '../bus/search';
import { usercontext } from '../context';
import Profile from './userprofile'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function Main(props){
    // constructor(props){
    //     super(props);
    //     this.state={
    //        component : false,
    //        othercomponent:true,
    //        tr:false,
    //         user:{
    //          userloggedin: false,
    //          user : " ",
    //          pass : " "
    //         }

    //     }
        // this.change = this.change.bind(this)
    
    // }

    // change(){
    //     let update = !this.state.component
    //     let otherupdate =!this.state.othercomponent
    //    this.setState({
    //        component : update,
    //        othercomponent : otherupdate,
    //        isLogin:true,
          

    //    })
    // }

    // componentDidUpdate()
    // {
    //     this.setState({
    //         tr:true
    //     })
    // }

    // render(){
        let context = useContext(usercontext)
        let usermobile= props.usermobile
        let userpass= props.userpass
        let username =props.username
        let useremail=props.useremail
        let isprofile=props.isprofile
        // console.log(username)
        // console.log(context)
       
        let pass = props.pass
        let show =props.getvalue
        // console.log(context.user)
        let prof =false
        let userdet ={
            user :context.user,
            mobile:context.mobile,
            password: context.password,
            email :context.email
        
        }
      
        const[showprofile,setshowprofile] = useState(false)
        const[showsearch,setshowsearch] =useState(false)
         
      
        return(

         <div>
            <div class="body">
               
            <div class='header'>   
            <span class='apptitle'>Bus Booking App</span> 
           
            </div> 
                
                 <a class='logobut' >
                    <button onClick={()=>setshowprofile(!showprofile)}>
                    <img src={logo}   class='signuplogo' ></img></button>
               
                        <span class="username">{context.user}</span>
                          
                         
                    </a>
                    <div class='profile'>
                            {
                            showprofile?
                            <Router>
                                <Link to='/'></Link>
                                <Link to='/profile'/>
                               <Route path='/'><Redirect to='/profile'></Redirect></Route>
                                 <Route path="/profile" render={() => <Profile username={username} userpass={userpass} useremail={useremail} usermobile={usermobile}/>} /></Router> : null}
                               
                    </div>   
              </div>
                {showprofile?null:<Router>
                                <Link to='/'></Link>
                                <Link to='/book-ticket'/>
                               <Route path='/'><Redirect to='/book-ticket'></Redirect></Route><Search username={username} userpass={userpass} useremail={useremail} usermobile={usermobile}/></Router>}
              </div>
         
        )}


export default Main