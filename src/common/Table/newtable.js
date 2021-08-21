import React, { Component } from "react";
import Swal from "sweetalert2";
import "./newtable.css";

class Table extends Component {
  constructor(props)
  {
    super(props)
    {
      this.state={
        show : false
      }
    }

  }
   showTable()
   {
     this.setState({
       show :true
     })
   }
  buildTable = (columns, data) => {
    let headerRow = [];
    let dataRows = [];
    let length = this.props.data.length;
    console.log(length);
    console.log(columns);
    console.log(data);
   
    columns.forEach((col) => {
      headerRow.push(<th class="heading">{col.heading}</th>);
    });

    data.forEach((item) => {
      let dataCells = [];

      columns.forEach((col) => {
        console.log(item);
        if(col.property==="button")
        {
          dataRows.push(<td><button onClick={this.showTable.bind(this)}>Book</button></td>)
        }
        dataRows.push(
          item[col.property]===undefined?
            <td>-</td>:
          <td>{item[col.property]}</td>);
           console.log(dataCells);
      });
   
      dataRows.push(
      <tr>{dataCells}</tr>);
    });
    return (
      <>
        <thead class="thead">
          <tr class="trow">{headerRow}</tr>
        </thead>
        <tbody class="tbody">{dataRows}</tbody>
      </>
    );
    };

  render() {
    const { columns, data } = this.props;
    const bookticket=this.props.bookticket;

    
    console.log(data);
    console.log(data);
    return (
      <div>
        <table className="table">{this.buildTable(columns, data)}</table>
        {this.state.show ? bookticket(true) : false}
      </div>
    );
  }
}

export default Table;
