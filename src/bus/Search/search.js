import React from "react";
import Item from "./listitems";
import To from "./to";
import "./search.css";
import TableData from "../busPage/buslistTable";
import bushistoryjson from "../../resources/busHistory.json";
import { getBusdetails } from "../../common/service/service";
import Swal from "sweetalert2";
import { userContext } from "../../context/context";



let bushistorydata = bushistoryjson;


class Search extends React.Component {
  static contextType = userContext;
  constructor() {
    super();

      this.state = {
      visible: false,
      value: "",
      tovalue: "",
      dateVal: "",
      button: false,
      showsearch: true,
    };
    this.showSource = this.showSource.bind(this);
    this.ShowtoValue = this.ShowtoValue.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.showTable = this.showTable.bind(this);
  }
showSource(e) {
    {
    this.setState
    ({
       value: e.target.value,
     });
  }
}

ShowtoValue(e) {
    if (e.target.value !== this.state.value) {
      this.setState({
        tovalue: e.target.value,
      });
    } 
    else {
      Swal.fire({
        icon: "info",
        title: "ohh!!",
        text: "source and destination should not be same...",
     });
   }
}
  dateChange(e) {
    {
      this.setState({ dateVal: e.target.value });
    }
  }

  showTable(e) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    if(((this.state.value)&&(this.state.tovalue)&&(this.state.dateVal))==="")
    {
      e.preventDefault();

      this.setState({ button: false });
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You haven't entered any values to search",
      });
    }
    
    else if (this.state.dateVal < today) {
      e.preventDefault();

      this.setState({ button: false });
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "You have entered the expired date!!",
      });
    } else {
      this.setState({
        button: true,
        showsearch: false,
      });
    }
  }

  render() {
    const value = this.state.value;
    const toValue = this.state.tovalue;
    const dateVal = this.state.dateVal;
    let previd, prevuserid, searchdet, busdetails;
    bushistorydata.userbusbooking.filter((element) => {
      previd = parseInt(element.id);
      prevuserid = element.userid;
    });
    const id = previd + 1;
    const userid = prevuserid + 1;
   searchdet = {
      from: value,
      to: toValue,
      date: dateVal,
      id: id,
      userid: userid,
    };

    let getBusdata;
    getBusdata = [getBusdetails(value, toValue)];
    let seats, busNo, fare, busname, from, to, type, button;
    let showtable;
    getBusdata.filter(function (element) {
      seats = element.NoOfSeats;
      busNo = element.busno;
      fare = element.fare;
      busname = element.busname;
      type = element.type;
      from = element.from;
      to = element.to;
      button = element.button;
      return getBusdata;
    });
    busdetails = {
      NoOfSeats: seats,
      busno: busNo,
      fare: fare,
      busname: busname,
      from: from,
      to: to,
      date: dateVal,
      type: type,
      button: button,
    };
    let storedDetails
    if (localStorage.getItem("searchdetails")) {
      storedDetails = JSON.parse(localStorage.getItem("searchdetails"));
    }

    return (
      <div>
        <div class="searchContainer">
          <div class="FromCol">
            <label>
              {" "}
              From{" "}
              <select
                class="From"
                value={
                  this.state.value
                }
                onChange={this.showSource}
              >
                <Item />
              </select>
            </label>
            <label>
              {""}
              To{""}
              <select
                class="From"
                value={
                  this.state.tovalue
                }
                onChange={this.ShowtoValue}
              >
                <To />
              </select>
            </label>
            <label>
              Date
              <input
                type="date"
                class="frominput"
                placeholder="Date"
                onChange={this.dateChange}
              ></input>
            </label>{" "}
            <button class="buttonclass" onClick={this.showTable}>
              Search
            </button>
          </div>
          {localStorage.getItem("searchdetails") ? (showtable = true) : null}
        </div>
        
        {this.state.button && <TableData />}
        {this.state.button
          && localStorage.setItem("searchdetails", JSON.stringify(searchdet))
          }
        {this.state.button && localStorage.setItem("busdetails", JSON.stringify(busdetails))}
        {showtable ? <TableData /> : null}
      </div>
    );
  }
}

export default Search;
