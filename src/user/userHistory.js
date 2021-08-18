import React from 'react'
import '../bus/busPage/buslistTable.css'
import '../common/newtable.css'
import Table from '../common/newtable';
import {getBushistory} from '../common/service/service'



let columns = [
  
 
  {
    heading: 'UserId',
    property: 'id'
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
  
  

let data =getBushistory()
console.log(data)
class HistoryTable extends React.Component {

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

export default HistoryTable;


