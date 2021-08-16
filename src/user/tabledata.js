import React, { Component } from 'react';
import Table from '../common/newtable';
// import {Route,Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import busdata from '../bus.json'
import './table.css'
import '../common/showticket.css'
import {getbusdetails} from '../service/service'
import BookTicket from '../common/bookticket'
import bushistory from '../bushistory.json'
let getbusdata 
let columns = [
  {
    heading: 'Bus Name',
    property: 'busname'
  },
  {
    heading: 'Bus No',
    property: 'busno'
  },
  {
    heading: 'Fare',
    property: 'fare'
  },
  {
    heading: 'From',
    property: 'from'
  },
  {
    heading: 'NoOfSeats',
    property: 'NoOfSeats'
  },
  {
    heading: 'To',
    property: 'to'
  },
  {
    heading: 'Type',
    property: 'type'
  },
]


class Tabledata extends Component {
    
  constructor(props){
    super(props)
    {
        this.state={
            isbookticket : false,
            showtable:true
        }
    this.bookticket = this.bookticket.bind(this)

    }
}
  bookticket(e){
    this.setState({
        isbookticket:true,
        showtable :false
    })
   
}
  render() {
      let from = this.props.value
      const to = this.props.tovalue
      const date = this.props.date;
      let usermobile = this.props.usermobile;
      let userpass = this.props.userpass
      let userid=this.props.userid
      let id=this.props.id

       getbusdata=[getbusdetails(from,to)]
 
    console.log(from)
    console.log(to)
  console.log(getbusdata)

    return (
      <>
     {this.state.showtable ?<Table columns={columns} data={getbusdata} propertyAsKey='from'/> : null}
      {this.state.showtable ?
      <button class='mybtn' onClick={this.bookticket}>Book</button> 
      : null}
      {this.state.isbookticket ?<Router>
    <Link to='/'></Link>
  <Link to='/book-seat'/>
 <Route path='/'><Redirect to='/book-seat'></Redirect></Route>
   <Route path="/book-seat" render={() => <BookTicket id={id} userid={userid} date={date} usermobile={usermobile} userpass={userpass} value={getbusdata}/>} /></Router> : null}
      </>
      
    );
  }
}

export default Tabledata;


