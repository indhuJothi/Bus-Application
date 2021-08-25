import React from "react";
import Table from "../common/Table/newtable";
import "../common/Table/newtable.css";
import "./userHistory.css";
import { getBushistory } from "../common/service/service";
import Header from "../common/header/header";
import Menu from "../common/menu";

let columns = [
  {
    heading: "UserId",
    property: "id",
  },
  {
    heading: "Mobile",
    property: "mobile",
  },
  {
    heading: "BusNo",
    property: "busno",
  },
  {
    heading: "Bus Name",
    property: "busname",
  },
  {
    heading: "TotalFare",
    property: "totalfare",
  },
  {
    heading: "Numberofseats",
    property: "numberofseats",
  },
  {
    heading: "Date",
    property: "date",
  },
  {
    heading: "Source",
    property: "from",
  },
  {
    heading: "Destination",
    property: "to",
  },
];

let data = getBushistory();
console.log(data);

class HistoryTable extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        go: false,
      };
    }
  }
  gotoSearch() {
    this.setState({
      go: true,
    });
  }

  render() {
    let go = this.state.go;
    let datalist = [...data].reverse();
    return (
      <>
        <Header />
        <Table columns={columns} data={datalist} />
        <button class="historyback" onClick={()=>this.props.history.goBack()}>Back</button>
        <button class="searchbtn" onClick={() => this.gotoSearch()}>
          Search
        </button>
        <Menu />
        {go ? this.props.history.push("/search") : null}
        {go && localStorage.removeItem("busdetails")}
        {go && localStorage.removeItem("searchdetails")}
      </>
    );
  }
}

export default HistoryTable;
