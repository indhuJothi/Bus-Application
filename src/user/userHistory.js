import React from "react";
import Table from "../common/Table/newtable";
import "../common/Table/newtable.css";
import "./userHistory.css";
import { getBushistory } from "../common/service/service";
import Menu from "../common/route";
import Main from "../common/main";
import { Redirect } from "react-router-dom";

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
    this.gotoSearch = this.gotoSearch.bind(this);
  }
  gotoSearch() {
    this.setState({
      go: true,
    });
  }

  render() {
    let go = this.state.go;
    let gotoSearch = this.gotoSearch;
    return (
      <>
        <Main />

        <Menu />
        <Table columns={columns} data={data} />
        <button class="searchbtn" onClick={gotoSearch}>
          Search
        </button>

        {go ? <Redirect to="/search"></Redirect> : null}
      </>
    );
  }
}

export default HistoryTable;
