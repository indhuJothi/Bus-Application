import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Search from '../bus/Search/search'
import HistoryTable from '../user/userHistory';
import './route.css'
import Main from './main';
import { userContext } from '../context'

class Menu extends Component {
	static contextType = userContext
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
			   <userContext.Provider value={userdet} ><Search/> </userContext.Provider>} />
			<Route exact path='/book-history' component={HistoryTable}></Route>
		</Switch>
	 </Router>		
		</div>
   </div>
	<userContext.Provider value={userdet} >
	 <Main/>		
	</userContext.Provider>
  </div>
  );
 }
}

export default Menu
