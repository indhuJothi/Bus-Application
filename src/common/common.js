import React from "react";
import Menu from "./menu";
import Search from "../bus/Search/search";
import Header from "./header/header";

class Common extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Menu />
        <Search />
      </>
    );
  }
}

export default Common;
