import React from 'react';
import '../index.css'
import logo from'../signlogo.jpg'
import './main.css'
import Search from '../bus/Search/search';
import { userContext } from '../context';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class Main extends React.Component{
 static contextType = userContext
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
      let context = this.context
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
                    <span class="username">{context.user}</span>
                 </a>
                <div class='profile'>{showProfile? <Redirect to='/profile'></Redirect>: null}
          </div>   
        </div>
         <Route to='/book-ticket'><Search/></Route>
         </div>
  )
 }
}

export default Main