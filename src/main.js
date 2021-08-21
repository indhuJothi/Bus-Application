import React from "react";
import RouteTable from "./common/routeprocess";

let userloggedin;
class Page extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        userloggedin: false,
      };
    }
    this.isuserlogin = this.isuserlogin.bind(this);
  }
  isuserlogin(value) {
    userloggedin = value;

    console.log(value);
  }

  render() {
    let isuserlogin = this.isuserlogin;

    return (
      <>
        <RouteTable isuserlogin={isuserlogin.bind(this)} />
      </>
    );
  }
}

export default Page;
