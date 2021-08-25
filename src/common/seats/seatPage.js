import React from "react";
import "./seatPage.css";
import { busContext } from "../../context/busContext";
import Menu from "../menu";
import Header from "../header/header";
import seat from   "../../resources/seat.jpg";
import { withRouter } from "react-router";

class SeatList extends React.Component {
  static contextType = busContext;
  constructor() {
    super();
    {
      this.state = {
        values:localStorage.getItem("arr")?JSON.parse(localStorage.getItem("arr")):[],
        showTicket: false,
        letsShow: true,
        error: " ",
      };
      this.getValue = this.getValue.bind(this);
      this.validate = this.validate.bind(this);
      this.goBack = this.goBack.bind(this);
    }
  }
  getValue(i, e) {
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
    localStorage.setItem("arr", JSON.stringify(this.state.values));
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
      localStorage.setItem("seatcount", seatcount);
      console.log(seatcount);
      const { history } = this.props;
      if (history) history.push("/ticket-form");
    }
  }

  goBack() {
    this.props.history.push("/search");
  }

  render() {
    let fare;
    let busNo;
    let busdocument = JSON.parse(localStorage.getItem("busdetails"));
    let seats = busdocument.NoOfSeats;
    let seatsLength = [];
    for (let i = 0; i < seats; i++) {
      seatsLength.push(i);
    }
    let seatVal;
    if (localStorage.getItem("arr")) {
      seatVal = JSON.parse(localStorage.getItem("arr"));
    }
    return (
      <div>
        <Header />
        <Menu />

        <div class="booktable">
          <button class="back" onClick={this.goBack}>
            GO BACK
          </button>
          {seatsLength.map((element, index) => {
            let seatVal;
            console.log("hi");
            if (localStorage.getItem("arr")) {
              let seatVal = JSON.parse(localStorage.getItem("arr"));

              {
                return (
                  <label class="main">
                    <input
                      type="checkbox"
                      checked={seatVal.includes(element + 1) ? "checked" : null}
                      value={element + 1}
                      onClick={this.getValue.bind(this, index)}
                    />
                    <span class="checkmark check">
                      <span class="number">{element + 1}</span>
                      <img src={seat} class="seat"></img>
                    </span>
                  </label>
                );
              }
            } else {
              return (
                <label class="main">
                  <input
                    type="checkbox"
                    value={element + 1}
                    onClick={this.getValue.bind(this, index)}
                  />
                  <span class="checkmark check">
                    <span class="number">{element + 1}</span>
                    <img src={seat} class="seat"></img>
                  </span>
                </label>
              );
            }
          })}
          <p class="err">{this.state.error}</p>
          <button type="submit" class="seatbutton" onClick={this.validate}>
            Book Seats
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SeatList);
