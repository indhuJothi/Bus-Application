import React, { Component } from "react";
import Table from "../../common/Table/newtable";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./buslistTable.css";
// import '../../common/showticket.css'
import { getBusdetails } from "../../common/service/service";
import SeatList from "../../common/seats/seatPage";
// import { userContext } from '../../context';
import { busContext } from "../../busContext";
import Menu from "../../common/route";
import Main from "../../common/main";
import { withRouter } from "react-router";

let getBusdata, context;
let columns = [
  {
    heading: "Bus Name",
    property: "busname",
  },
  {
    heading: "Bus No",
    property: "busno",
  },
  {
    heading: "Fare",
    property: "fare",
  },
  {
    heading: "From",
    property: "from",
  },
  {
    heading: "No Of Seats",
    property: "NoOfSeats",
  },
  {
    heading: "To",
    property: "to",
  },
  {
    heading: "Type",
    property: "type",
  },
  {
    heading:"Book Ticket",
    property:"button"
  }
];

class TableData extends Component {
  static contextType = busContext;
  constructor(props) {
    super(props);
    {
      this.state = {
        isbookticket: false,
        showtable: true,
      };
      this.bookTicket = this.bookTicket.bind(this);
    }
  }
  bookTicket(val) {
    if(val)
    {
    this.setState({
      isbookticket: true,
      showtable: false,
    });
    const { history } = this.props;
    if(history) history.push('/book-seat');
  }
  }

  render() {
    const { history } = this.props;
    context = this.context;
    console.log(context);
    let document = JSON.parse(localStorage.getItem("searchdetails"));
    let source = document.from;
    let destination = document.to;
    // console.log(from)
    const date = document.date;
    let userid = document.userid;
    let id = document.id;
    console.log(userid);
    let seats, busno, fare, busname, from, to, type;
    let busdatas = JSON.parse(localStorage.getItem("busdetails"));
    console.log(busdatas);
    console.log(busdatas.from);
    //  getBusdata=[getBusdetails(source,destination)]
    let bookTicket = this.bookTicket
    getBusdata = [
      {
        from: busdatas.from,
        to: busdatas.to,
        busno: busdatas.busno,
        busname: busdatas.busname,
        fare: busdatas.fare,
        type: busdatas.type,
        NoOfSeats: busdatas.NoOfSeats,
      },
    ];
    console.log(getBusdata);

    var busdata = getBusdata.filter(function (element) {
      seats = element.NoOfSeats;
      busno = element.busno;
      fare = element.fare;
      busname = element.busname;
      type = element.type;
      from = element.from;
      to = element.to;
      return getBusdata;
    });
    let busdetails = {
      NoOfseats: seats,
      busno: busno,
      fare: fare,
      busname: busname,
      from: from,
      to: to,
      date: date,
      type: type,
    };
    console.log(busdata);
    console.log(from);
    console.log(to);
    console.log(getBusdata);
    return (
      <>
        <Menu />
        <Table columns={columns} data={getBusdata} bookticket={bookTicket.bind(this)}/>
        {/* <button class="mybtn" onClick={this.bookTicket}>
          Book
        </button> */}
        {/* {this.state.isbookticket ? <Redirect to="book-seat" /> : null} */}
      </>
    );
  }
}
export default  withRouter(TableData);
