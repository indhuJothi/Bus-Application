import React from "react";
import "./ticketForm.css";
import "../busPage/buslistTable.css";
import userhistory from "../../userHistory.json";
import bushistory from "../../busHistory.json";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { userContext } from "../../context";
import Main from "../../common/main";
import Menu from "../../common/route";
import { withRouter } from "react-router";

let userhistoryjson = userhistory;
let bushistoryjson = bushistory;
let userpushdetails, bushistorypushdetails;
console.log(userhistoryjson);
let value;
class TicketForm extends React.Component {
  static contextType = userContext;
  constructor(props) {
    super(props);
    {
      this.state = {
        name: [],
        selectedOption: [],
        age: [],
        isbool: false,
        value: [],
      };
    }
    this.booked = this.booked.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }
  handleChange(index, event) {
    // let name = [...this.state.name];
    // const age = event.target.age;
    // let value= this.state.value
    // let name=event.target.name
    // this.setState({
    // [name]: event.target.value,
    // [age]: event.target.value,
    //   // value:value
    // });
    // if(this.state.name)
    // {
    //   value.push({
    //     [name]:this.state.name,
    //     [age]:this.state.age
    //   })
    // }
    // console.log(this.state.name)
    let names = this.state.name.slice();
    names[index] = event.target.value;
    this.setState({ name: names });
    console.log(this.state.name);
  }

  handleAge(index, event) {
    let ages = this.state.age.slice();
    ages[index] = event.target.value;
    this.setState({ age: ages });
    console.log(this.state.age);
  }
  onValueChange(index, event) {
    let genders = this.state.selectedOption.slice();
    genders[index] = event.target.value;
    this.setState({
      selectedOption: genders,
    });
  }

  booked(event, index) {
    event.preventDefault();
    this.setState({
      isbool: true,
    });
    console.log(this.state.name);
    console.log(this.state.selectedOption);
    console.log(this.state.age);
    userhistoryjson.buspassanger.push(userpushdetails);
    console.log(userhistoryjson);
    bushistoryjson.userbusbooking.push(bushistorypushdetails);
    console.log(bushistoryjson);
    const { history } = this.props;
    if (history) history.push("/ticket");
  }
  render() {
    let values = [{ name: this.state.name }];

    let busdetails = JSON.parse(localStorage.getItem("busdetails"));
    let searchdetails = JSON.parse(localStorage.getItem("searchdetails"));
    let userMobile = localStorage.getItem("mobile");
    let seatcount = localStorage.getItem("seatcount");
    console.log(userMobile);
    console.log(this.state.name);
    console.log(this.state.age);
    console.log(this.state.selectedoption);
    console.log(seatcount);
    let fare = busdetails.fare;
    console.log(fare);
    let amnt = seatcount * fare;
    let date = searchdetails.date;
    console.log(amnt);
    let value = this.state.value;
    let userId = searchdetails.userid;
    let id = searchdetails.id;
    let busno = busdetails.busno;
    let selectSeats = localStorage.getItem("arr");
    console.log(userId);

    userpushdetails = {
      userbusbookingid: id,
      name: this.state.name,
      mobile: userMobile,
    };
    bushistorypushdetails = {
      id: id,
      mobile: localStorage.getItem("mobile"),
      userId: userId,
      busno: busno,
      totalfare: amnt,
      numberofseats: seatcount,
      date: date,
      from: searchdetails.from,
      to: searchdetails.to,
      busname: busdetails.busname,
    };
    let seatss = JSON.parse(localStorage.getItem("arr"));
    console.log(seatss);
    console.log(seatss.length);
    console.log(bushistorypushdetails);
    console.log(values);
    //  console.log(selectSeats)
    return (
      <div>
        <Main />
        <Menu />
        <div class="finalticket">
          <form class="passengerform" onSubmit={this.booked}>
            {seatss.map((element, index) => {
              return (
                <span>
                  <div class="form-input" key={index}>
                    <div>
                    <span class="passengerNo">Passenger:{index+1}</span>
                    <span class="seatno">SeatNo:{element}</span>
                    </div>
                    <br />
                    <label for="name">
                      Passenger Name:
                      <input
                        class="inputname"
                        type="text"
                        name="name"
                        value={this.state.name[index]}
                        onChange={this.handleChange.bind(this, index)}
                      />
                    </label>
                    <div className="radio">
                      <label>
                        <input
                          class="radio"
                          type="radio"
                          value="Male"
                          // checked={this.state.selectedoption==="Male"}
                          onChange={this.onValueChange.bind(this, index)}
                        />
                        Male
                      </label>
                      <label>
                        <input
                          class="radio"
                          type="radio"
                          value="Female"
                          // checked={this.state.selectedOption==="Female"}
                          onChange={this.onValueChange.bind(this, index)}
                        />
                        Female
                      </label>
                    </div>
                    <label for="age">
                      Age
                      <input
                        type="text"
                        name="age"
                        value={this.state.age[index]}
                        onChange={this.handleAge.bind(this, index)}
                        class="inputname"
                      />
                    </label>
                  </div>
                </span>
              );
            })}
            <span class="amount">TotalFare:{amnt}</span>
            <input type="submit" class="submit" />
          </form>
        </div>
        {/* {this.state.isbool ? <Redirect to="/ticket" /> : null} */}
      </div>
    );
  }
}
export default withRouter(TicketForm);
