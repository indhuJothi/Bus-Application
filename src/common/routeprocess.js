import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import App from "./UserLogin/App";
import Search from '../bus/Search/search'
import Ticket from './ticket';
import Menu from './route';
import TableData from '../bus/busPage/buslistTable';
import { userContext } from '../context';
import Profile from './userprofile';
import Common from './common';
import { busContext } from '../busContext';
import SeatList from './seats/seatPage';
import TicketForm from '../bus/TicketForm/ticketForm';


class RouteTable extends Component {
render() {
  return (
	   <Router>      
           <Route exact path='/'  >
             <Redirect to="/login"></Redirect>
          </Route>
           <Route path="/login" component={App} />
           <Route path="/search" component={Common}/>
           {/* <Route path="/tabledata" component={TableData}/> */}
           <Route path="/book-seat" component={SeatList}/>
           <Route path="/profile" component={Profile}/>
           <Route path="/ticket-form" component={TicketForm}/>
           <Route path='/ticket' component={Ticket}/>         
	     </Router>

     
);
}
}



export default RouteTable
