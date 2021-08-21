import React from "react";
import userhistory from "../userHistory.json";
import Main from "./main";
import Menu from "./route";
import { getBushistory } from "./service/service";
import "./ticket.css";
import bus from "../bus.json";
import { seatCount } from "./service/service";
import { Redirect } from "react-router-dom";
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
  render() {
    let busdetails = JSON.parse(localStorage.getItem("busdetails"));
    let searchdetails = JSON.parse(localStorage.getItem("searchdetails"));
    let userMobile = localStorage.getItem("mobile");
    let seatcount = localStorage.getItem("seatcount");
    let from = busdetails.from;
    let to = busdetails.to;
    let busno = busdetails.busno;
    let busname = busdetails.busname;
    // busdetails.seats=busdetails.seats-seatcount
    // getBushistory
    console.log(seatcount);
    let fare = busdetails.fare;
    console.log(fare);
    let amnt = seatcount * fare;
    let date = searchdetails.date;
    console.log(amnt);
    let userId = searchdetails.userid;
    let selectSeats = localStorage.getItem("arr");
    return (
      <div>
        <Main />
        <Menu />
        <div class="ticket">
          <h1>Booking Details</h1>
          <span class="info">Userbookingid:</span>
          {userId}
          <br></br>
          <span class="info">Name:</span> {localStorage.getItem("name")}
          <br></br>
          <span class="info">Mobile:</span> {localStorage.mobile}
          <br></br>
          <span class="info">Seatno:</span> {selectSeats}
          <br></br>
          <span class="info">Fare:</span> {amnt}
          <br></br>
          <span class="info">From:</span>
          {from}
          <br></br>
          <span class="info">To: </span>
          {to}
          <br></br>
          <span class="info">Bus No:</span>
          {busno}
          <br></br>
          <span class="info">Bus name:</span>
          {busname}
          <br></br>
          <button onClick={this.submit}> proceed to pay</button>
        </div>
        {this.state.isbool ? null : <Redirect to="/search"></Redirect>}
        {this.state.isbool ? null : <Redirect to="/user-history"></Redirect>}
      </div>
    );
  }
}

export default Ticket;
