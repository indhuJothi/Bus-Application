import React from "react";
import userhistory from  "../resources/userHistory.json";
import Menu from "./menu";
import { getBushistory } from "./service/service";
import "./ticket.css";
import bus from  '../resources/bus.json';
import { seatCount } from "./service/service";
import { Redirect, withRouter } from "react-router-dom";
import Header from "./header/header";
let busdata = bus;
let userHistoryjson = userhistory;
let userBookingid, name, mobile, stno;
class Ticket extends React.Component {
  constructor() {
    super();
    {
      this.state = { isbool: true };
    }
    this.submit = this.submit.bind(this);
  }
  submit() {
    let busdetails = JSON.parse(localStorage.getItem("busdetails"));
    let seatcount = localStorage.getItem("seatcount");
    let busno = busdetails.busno;
    let res = seatCount(busno, seatcount);
    busdetails.NoOfSeats = busdetails.NoOfSeats - seatcount;
    console.log(res);
    console.log(busno);
    console.log(seatcount);
    this.setState({
      isbool: false,
    });
  }
  goBack(){
    this.props.history.goBack()
  }

  render() {
    let busdetails = JSON.parse(localStorage.getItem("busdetails"));
    let searchdetails = JSON.parse(localStorage.getItem("searchdetails"));
    let userMobile = localStorage.getItem("mobile");
    let seatcount = localStorage.getItem("seatcount");
    let from = busdetails.from;
    let to = busdetails.to;
    let busno = busdetails.busno;
    let busname = busdetails.busname;
    let passengerName = JSON.parse(localStorage.getItem("PassengerName"));

    console.log(seatcount);
    let fare = busdetails.fare;
    console.log(fare);
    let amnt = seatcount * fare;
    let date = searchdetails.date;
    console.log(amnt);
    let userId = searchdetails.userid;
    let selectSeats =localStorage.getItem("arr");
    let passenger;
    return (
      <div>
        <Header />
        <Menu />
       
        <div class="ticket">
        <button class="goBack" onClick={() => this.goBack()}>BACK</button>
          <h1>Booking Details</h1>
          <label class="info">Userbookingid:<span class="info1"> {userId}</span></label>
         
          <br></br>
          <label class="info">Name:<span class="info1">
          {
            (passenger = passengerName.map((elem, i) => {
              return i + 1 + "." + elem + " ";
            }))
          }</span></label>
          <br></br>
          <label class="info">Mobile:<span class="info1">{userMobile}</span></label>
          <br></br>
          <label class="info">Seatno:<span class="info1">{selectSeats}</span> </label>
          <br></br>
          <label class="info">Fare:<span class="info1">{amnt}</span> </label>
          <br></br>
          <label class="info">From:<span class="info1">{from}</span></label>
          
          <br></br>
          <label class="info">To:<span class="info1">{to}</span></label>
      
          <br></br>
          <label class="info">Bus No:<span class="info1"> {busno}</span></label>
        
          <br></br>
          <label class="info">Bus name:<span class="info1"> {busname}</span></label>
         
          <br></br>
          <button onClick={this.submit}> proceed to pay</button>
        </div>

        {this.state.isbool ? null : this.props.history.push('/user-history')} 
      </div>
    );
  }
}

export default withRouter(Ticket);
