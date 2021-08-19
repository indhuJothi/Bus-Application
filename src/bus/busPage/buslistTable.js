import React, { Component } from 'react';
import Table from '../../common/Table/newtable';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './buslistTable.css'
// import '../../common/showticket.css'
import {getBusdetails} from '../../common/service/service'
import SeatList from '../../common/seats/seatPage'
// import { userContext } from '../../context';
import {busContext} from '../../busContext'
import Menu from '../../common/route';
import Main from '../../common/main';


let getBusdata,context
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
static contextType = busContext
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
      context = this.context
      console.log(context)
      let document = JSON.parse(localStorage.getItem("searchdetails"))
      let from = document.from
      let to= document.to
      console.log(from)
      const date =document.date
      let userid=document.userid;
      let id=document.id
      console.log(userid)

      
   getBusdata=[getBusdetails(from,to)]
let seats,busNo,fare
var busdata=getBusdata.filter(function(element){
  seats= element.NoOfSeats
  busNo=element.busno
  fare=element.fare
   return getBusdata
})
let busdetails ={
  seats:seats,
  busNo:busNo,
  fare:fare
}
  console.log(busdata)
   console.log(from)
   console.log(to)
   console.log(getBusdata)
return (
      <>
      <Menu/>
      <Main/>
     <Table columns={columns} data={getBusdata}/>
    
      <button class='mybtn' onClick={this.bookTicket}>Book</button> 
      
      {this.state.isbookticket?localStorage.setItem("busdetails",JSON.stringify(busdetails)):null}
   
      {this.state.isbookticket ?<Redirect to="book-seat"/> : null}
      </>  
    );
  }
}
export default TableData;


