import React, { Component } from 'react';
import './newtable.css'


class Table extends Component {

buildTable = (columns,data) => {
    let headerRow = [];
    let dataRows = [];
    let length = this.props.data.length
    console.log(length)
    console.log(columns)
    console.log(data)
 
     columns.forEach (col => {
      headerRow.push(
        <th class="heading">{col.heading}</th>
      );
    });

   data.forEach(item => {
      let dataCells = [];

    columns.forEach (col => {
      console.log(item)
        dataRows.push(
          <td>{item[col.property]}</td>  
        );
        console.log(dataCells)
      });
      dataRows.push(
        <tr >{dataCells}
       </tr>   
      )
    });
 return(
      <>
        <thead class='thead'>
          <tr class="trow">{headerRow}</tr>
        </thead>
        <tbody class='tbody'>
          {dataRows}
        </tbody>
        
      </>
    );
}

render() {
    const {
      columns,
      data
       } = this.props;
   console.log(data)
   console.log(data)
  return (
        <div>
        <table className='table'>
        {this.buildTable(columns, data)}
        </table> 
         </div>
    );
  
  }

}

export default Table;