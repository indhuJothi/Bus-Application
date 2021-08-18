import React from 'react'
import './seatPage.css'
import TicketForm from '../../bus/TicketForm/ticketForm'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

class SeatList extends React.Component{

  constructor(){
    super()
    {
      this.state={
        values:[],
        showTicket :false,
        letsShow : true
      }
      this.getValue=this.getValue.bind(this)
      this.validate = this.validate.bind(this)
    }
  }
  getValue(e){
    const values = this.state.values
    let index
    if (e.target.checked) {
      
      values.push(+e.target.value)
    } else {

      index = values.indexOf(+e.target.value)
      values.splice(index, 1)
    }
    this.setState({ values: values})
    console.log(values)
  }
validate(e){
  e.preventDefault();
this.setState({
  showticket:true,
  letsShow:false
})

}

  render()
  {
  let data =this.props.value
  let seats,fare
  let id=this.props.id
  let userid=this.props.userid
  let date= this.props.date
  let busNo 
  console.log(userid)
  console.log(date)
  let availableSeat =  data.filter(function(element){
           seats= element.NoOfSeats
           fare =element.fare
           busNo=element.busno
            return data
  })
  console.log(busNo)
  console.log(seats)
     let seatsLength=[]
     for(let i=0;i<seats;i++){
         seatsLength.push(i)
     }
     console.log(seatsLength)
     console.log(fare)
    const arr= this.state.values
    return(
      <div>
    {this.state.letsShow?  <div  class='booktable'>
      { seatsLength.map(element=>{
        console.log("hi")
        if(element%2==0)
        return <label class="main"><input type="checkbox" value={element+1} onClick={this.getValue}/><span class="checkmark">{element+1}</span></label>
       else
        return<label class="main"><input type="checkbox" checked="checked" value={element+1} onClick={this.getValue}/><span class="checkmark">{element+1}</span></label>
        }
     )}
        <button type='submit' class="seatbutton"  onClick={this.validate}>Book Seats</button>
        </div> : null}
        {this.state.showticket? <Router>
        <Link to='/'></Link>
        <Link to='/show-ticket'/>
        <Route path='/'><Redirect to='/show-ticket'></Redirect></Route>
        <Route path="/show-ticket" render={() => <TicketForm
        busno={busNo} 
        data={data} 
        date={date} 
        fare={fare}
        value={arr}
        id={id} 
        userid={userid}/>
        } />
        </Router> : null}
     </div>
   )
  }
}
    




export default SeatList