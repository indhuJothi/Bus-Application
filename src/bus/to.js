import React, { Component } from "react";
import './search.css'

const Tolist = [' ','Chennai','Madurai','Trichy']
class To extends Component {
  state = {
    listitems: ["Chennai", "Bangalore", "Trichy"]
  };

  render() {
    return (
      <React.Fragment>
        
          {/* {this.state.listitems.map(listitem => (
            <li class="fromListItems" value={listitem} >{listitem}</li>
          ))} */}
          {Tolist.map((to) => (
          
          <option  value={to.value}> {to===' '? " " : to}</option>
                ))} 
      </React.Fragment>
    );
  }
}

export default To;