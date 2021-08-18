import React, { Component } from 'react';
import Table from '../../common/newtable';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './buslistTable.css'
// import '../../common/showticket.css'
import {getBusdetails} from '../../common/service/service'
import SeatList from '../../common/seats/seatPage'
import { userContext } from '../../context';

let getBusdata 
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
    heading: 'No Of Seats',
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


class TableData extends Component {
  static contextType = userContext
  constructor(props){
    super(props)
    {this.state={  
            isbookticket : false,
            showtable:true
        }
    this.bookTicket = this.bookTicket.bind(this)

    }
}
  bookTicket(e){
    this.setState({
        isbookticket:true,
        showtable :false
    })
   
}
  render() {
      let context = this.context
      console.log(context)
      let from = this.props.value
      const to = this.props.tovalue
      const date = this.props.date;
      let userid=this.props.userid
      let id=this.props.id
      console.log(userid)
   getBusdata=[getBusdetails(from,to)]
   console.log(from)
   console.log(to)
   console.log(getBusdata)
return (
      <>
     {this.state.showtable ?<Table columns={columns} data={getBusdata}/> : null}
      {this.state.showtable ?
      <button class='mybtn' onClick={this.bookTicket}>Book</button> 
      : null}
      {this.state.isbookticket ?<Router>
        <Link to='/'></Link>
        <Link to='/book-seat'/>
        <Route path='/'><Redirect to='/book-seat'></Redirect></Route>
        <Route path="/book-seat" render={() => 
        <SeatList id={id} userid={userid} date={date} value={getBusdata}/>
        } />
        </Router> : null}
      </>  
    );
  }
}
export default TableData;


