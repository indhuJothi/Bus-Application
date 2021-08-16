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
        let user= props.user
        console.log(user)
        console.log(context)
        // let tr = state.tr
        let pass = props.pass
        let show =props.getvalue
        console.log(context.user)
        let profile =false
        function showprofile()
        {
        return <Profile/>
        }
        console.log(profile)
        return(

         
            <div class="body">
               
            <div class='header'>   
            <span class='apptitle'>Bus Booking App</span> 
            </div> 
                
                 <a class='logobut' >
                    <button onClick={showprofile}>
                    <img src={logo}   class='signuplogo' ></img></button> 
                        <span class="username">{context.user}</span>
                          
                    </a>
                    <div class='profile'>
                              
                    </div>          
              </div>
         
        )}


export default Main