import React from "react";
import "./seatPage.css";
import TicketForm from "../../bus/TicketForm/ticketForm";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { busContext } from "../../busContext";
import { getBusdetails } from "../service/service";
import Menu from "../route";
import Main from "../main";
import seat from "../../seat.jpg";
import { withRouter } from "react-router";

class SeatList extends React.Component {
  static contextType = busContext;
  constructor() {
    super();
    {
      this.state = {
        values: [],
        showTicket: false,
        letsShow: true,
        error: " ",
      };
      this.getValue = this.getValue.bind(this);
      this.validate = this.validate.bind(this);
    }
  }
  getValue(e) {
    const values = this.state.values;
    let index;
    if (e.target.checked) {
      values.push(+e.target.value);
    } else {
      index = values.indexOf(+e.target.value);
      values.splice(index, 1);
    }
    this.setState({ values: values });
    console.log(values);
  }
  validate(e) {
    let seatcount = this.state.values.length;
    if (seatcount <= 0) {
      this.setState({
        error: "No seats were selected",
      });
    } else {
      e.preventDefault();
      this.setState({
        showticket: true,
        letsShow: false,
        error: " ",
      });
      localStorage.setItem("arr", JSON.stringify(this.state.values));
      localStorage.setItem("seatcount", seatcount);
      console.log(seatcount);
      const { history } = this.props;
      if(history) history.push('/ticket-form');
    }
  }

  render() {
    let fare;
    let busNo;
    let busdocument = JSON.parse(localStorage.getItem("busdetails"));
    let seats = busdocument.NoOfSeats;
    console.log(seats);
    console.log(busdocument.busno);

    console.log(busNo);

    let seatsLength = [];
    for (let i = 0; i < seats; i++) {
      seatsLength.push(i);
    }
    console.log(seatsLength);
    console.log(fare);
    // const arr= [this.state.values
    // console.log(arr)
    return (
      <div>
        <Main />
        <Menu />
        <div class="booktable">
          {seatsLength.map((element) => {
            console.log("hi");
            if (element % 2 == 0)
              return (
                <label class="main">
                  <input
                    type="checkbox"
                    value={element + 1}
                    onClick={this.getValue}
                  />
                  <span class="checkmark">
                    <span class="number">{element + 1}</span>
                    <img src={seat} class="seat"></img>
                  </span>
                </label>
              );
            else
              return (
                <label class="main">
                  <input
                    type="checkbox"
                    checked="checked"
                    value={element + 1}
                    onClick={this.getValue}
                  />
                  <span class="checkmark">
                    <span class="number">{element + 1}</span>
                    <img src={seat} class="seat"></img>
                  </span>
                </label>
              );
          })}
          <p class="err">{this.state.error}</p>
          <button type="submit" class="seatbutton" onClick={this.validate}>
            Book Seats
          </button>
        </div>

        {/* {this.state.showticket ? (
          <Redirect to="/ticket-form">
            <TicketForm />
          </Redirect>
        ) : null} */}
      </div>
    );
  }
}

export default withRouter(SeatList);
