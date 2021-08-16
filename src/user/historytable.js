import React from 'react'
import './table.css'
import '../common/newtable.css'
import Table from '../common/newtable';
import {getbushistory} from '../service/service'



let columns = [
  
 
    {
      heading: 'UserId',
      property: 'userid'
    },
    {
      heading: 'BusNo',
      property: 'busno'
    },
    {
      heading: 'TotalFare',
      property: 'totalfare'
    },
    {
      heading: 'Numberofseats',
      property: 'numberofseats'
    },
    {
      heading: 'Date',
      property: 'date'
    }
  ]
  
  

let data =getbushistory()
console.log(data)
class Historytable extends React.Component {

  render() {
    return (
      <>
        <Table
          columns={columns}
          data={data}
         
        />
      </>
    );
  }
}

export default Historytable;


