import React from "react";
import Menu from "./route";
import Main from "./main";
import Search from "../bus/Search/search";
import { busContext } from "../busContext";
let from, to, date, id, userId;
class Common extends React.Component {
  render() {
    return (
      <>
        <Main />
        <Menu />
        <Search />
      </>
    );
  }
}

export default Common;
