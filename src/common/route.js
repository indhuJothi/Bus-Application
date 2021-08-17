import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Search from '../bus/search'
import Historytable from '../user/historytable';
import './route.css'
import Main from './main';
import { usercontext } from '../context'

class Menu extends Component {
	static contextType = usercontext
	constructor()
	{
		super()
		{
			this.state={
				center : true,
				isshowsearch:true
			 }
			this.hide= this.hide.bind(this)
		}
	}
   hide(){
		this.setState({
			center:false
		})
	}
	
  render() {
	let usermobile= this.props.usermobile
	let userpass= this.props.userpass
	let username =this.props.username
	let useremail=this.props.useremail	
    let userdet ={
		user :username,
		mobile:usermobile,
		password :userpass,
		email : useremail
        }
	console.log(userdet)
    console.log(usermobile)
	console.log(userpass)
	console.log(username)
  return (
	<div>
      <div>
	  <div className="App">
	<Router>
	   <ul >
         <li class='li'><Link class='link' to='/book-ticket'>Bookticket</Link></li>
		 <li class='li'><Link  class='link' to='/book-history'>User History</Link></li>
        </ul>
        <Switch>
            <Route exact path="/book-ticket" render={() => 
			   <usercontext.Provider value={userdet} ><Search/> </usercontext.Provider>} />
			<Route exact path='/book-history' component={Historytable}></Route>
		</Switch>
	 </Router>		
		</div>
   </div>
	<usercontext.Provider value={userdet} >
	 <Main/>		
	</usercontext.Provider>
  </div>
  );
 }
}

export default Menu
