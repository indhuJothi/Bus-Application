import React, { Component } from "react";
import Table from "../../common/Table/newtable";
import "./buslistTable.css";
import { busContext } from "../../context/busContext";
import Menu from "../../common/menu";
import { withRouter } from "react-router";
let storedBusdata
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
    heading: "Book Ticket",
    property: "button",
  },
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
  bookTicket(isTrue) {
    if (isTrue) {
      this.setState({
        isbookticket: true,
        showtable: false,
      });
      const { history } = this.props;
      if (history) history.push("/book-seat");
    }
  }

  render() {
    const { history } = this.props;
    context = this.context;
    console.log(context);
    let document = JSON.parse(localStorage.getItem("searchdetails"));
    let source = document.from;
    let destination = document.to;
    const date = document.date;
    let userid = document.userid;
    let id = document.id;
    console.log(userid);
    let seats, busno, fare, busname, from, to, type,button;
    let busdatas = JSON.parse(localStorage.getItem("busdetails"));
    console.log(busdatas);
    console.log(busdatas.from);
    let bookTicket = this.bookTicket;
  
    if(localStorage.getItem('busdetails'))
    { 
      storedBusdata = JSON.parse(localStorage.getItem("busdetails"))
      getBusdata = [
        {
          from: storedBusdata.from,
          to: storedBusdata.to,
          busno: storedBusdata.busno,
          busname: storedBusdata.busname,
          fare: storedBusdata.fare,
          type:storedBusdata.type,
          NoOfSeats:storedBusdata.NoOfSeats,
          button:storedBusdata.button
        },
      ];
    }
    else{
    getBusdata = [
      {
        from: busdatas.from,
        to: busdatas.to,
        busno: busdatas.busno,
        busname: busdatas.busname,
        fare: busdatas.fare,
        type: busdatas.type,
        NoOfSeats: busdatas.NoOfSeats,
        button:busdatas.button
      },
    ];
  }
    console.log(getBusdata);

    var busdata = getBusdata.filter(function (element) {
      seats = element.NoOfSeats;
      busno = element.busno;
      fare = element.fare;
      busname = element.busname;
      type = element.type;
      from = element.from;
      to = element.to;
      button=element.to

      return getBusdata;
    });
    console.log(busdata);
    console.log(from);
    console.log(to);
    console.log(getBusdata);
    return (
      <>
        <Menu />
        <Table
          columns={columns}
          data={getBusdata}
          bookticket={bookTicket.bind(this)}
        />
      </>
    );
  }
}
export default withRouter(TableData);
