import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App";
import Search from '../bus/search'
import Historytable from '../user/historytable';
import './route.css'
import Main from './main';
import Ticket from './ticket';
import { usercontext } from '../context'


class Menu extends Component {
	
	constructor(){
		super()
		{
			this.state={
				center : true
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
	
	let prop = this.props.value
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

				
					 
            	<Search  usermobile={usermobile} userpass={userpass} />
            <div><div className="App">
	        <Router>

			
	        <ul >
                    <li class='li'><Link  class='link' to='/'></Link></li>
                    <li class='li'><Link class='link' to='/book-ticket'>Bookticket</Link></li>
					<li class='li'><Link  class='link' to='/book-history'>User History</Link></li>
             </ul>
                <Switch>
                <Route exact path='/'></Route>
				<Route path="/book-ticket" render={() => <Search usermobile={usermobile} userpass={userpass} />} />
				<Route exact path='/book-history' component={Historytable}></Route>
			
                </Switch>
				
            </Router>
			</div>

    </div>
	<usercontext.Provider value={userdet} >
		 <Main />	
		
	</usercontext.Provider>
    </div>
);
}
}

export default Menu
