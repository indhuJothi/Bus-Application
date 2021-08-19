import React from 'react';
import '../index.css'
import logo from'../signlogo.jpg'
import './main.css'
import Search from '../bus/Search/search';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Main extends React.Component{
 
  constructor()
     {
         super()
         {
            this.state={
                showprofile:false,
                showsearch:false
            }
         }
         this.setshowProfile=this.setshowProfile.bind(this)
         this.show=this.show.bind(this)
     }
  setshowProfile()
  {
    let res=  !this.state.showprofile
    this.setState({
      showprofile : res
    })
  }
  show(val)
  {
   if(val)
   {
       this.setState({
           showsearch:true
       })
    }
  }

  render(){
     
      let setshowProfile= this.setshowProfile
      let showProfile=this.state.showprofile
    
return(
      <div>
          <div class="body">
            <div class='header'>   
             <span class='apptitle'>Bus Booking App</span> 
               </div> 
                 <a class='logobut' >
                   <button onClick={setshowProfile}>
                     <img src={logo}   class='signuplogo' ></img>
                    </button>
                    <span class="username">{sessionStorage.getItem("name")}</span>
                 </a>
                <div class='profile'>{showProfile? <Redirect to='/profile'></Redirect>: null}
          </div>   
        </div>
      </div>
  )
 }
}

export default Main