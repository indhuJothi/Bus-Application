import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App";
import Search from '../bus/search'
import Ticket from './ticket';
import Historytable from '../user/historytable';

// import './route.css'

import Main from './main';

import Tabledata from '../user/tabledata';
import ShowTicket from './showticket';
import Menu from './route';
import BookTicket from './bookticket';
import Table from './newtable';

let data,logintrue
class RouteTable extends Component {

	constructor(){
		super()
		{
			this.state={
        user:" ",
        pass:" ",
        getvalue:false
      }
			
		}
        this.givetabledatas= this.givetabledatas.bind(this)
       
        this.isuserlogin=this.isuserlogin.bind(this)
        this.isuserpass = this.isuserpass.bind(this)

	}

  isuserlogin(val)
  {
     this.setState({
       user:val
       
     })
     console.log(val)
    

  }
  isuserpass(val)
  {
    this.setState({
      pas:val,
      getvalue:true
    })
    console.log(val)
  }
    givetabledatas(val)
    {
        data = val
    }
   
render() {
   let toprint = this.props.isuserlogin
   let  isuserlogin = this.isuserlogin
   let isuserpass=this.isuserpass
   let getvalue = this.state.getvalue
   let user = this.state.user
   let pas = this.state.pas

  
 
 
 
	return (
        <div>
           { getvalue ? toprint(true): false }
            <div>
	      <Router>
		<div>
           <Link class='link' to="/" onClick={this.hide}></Link>
		   <Link class='link' to="/login" onClick={this.hide}></Link>
           <Link class='link' to='/search'></Link>
           <Link class='link' to='/book-seat'></Link>
           <Link class='link' to='/ticket-book'></Link>
           <Link class='link' to='/ticket'/>
           <Route exact path='/'  ><Redirect to='/login'/></Route>
           <Route path="/login" render={() => <App isuserlogin={isuserlogin.bind(this)} isuserpass={isuserpass.bind(this)}  />} />
 
           <Route path="/search" render={() => <Menu usermobile={user} userpass={pas} />} />
           <Route path="/book-ticket" render={() => <Search usermobile={user} userpass={pas} />} />
           <Route path='/ticket'render={() => <Ticket usermobile={user} userpass={pas} />}/>
            
            </div>
	</Router>


    </div>
    </div>
);
}
}

export default RouteTable
