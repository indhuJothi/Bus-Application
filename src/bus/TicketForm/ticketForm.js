import React from 'react'
import './ticketForm.css'
import userhitory from '../../userHistory.json'
import bushistory from '../../busHistory.json'
import Ticket from '../../common/ticket'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { userContext } from '../../context'

let userhitoryjson= userhitory
let bushistoryjson = bushistory
let userpushdetails,bushistorypushdetails
console.log(userhitoryjson)

class TicketForm extends React.Component{
  static contextType = userContext
   constructor(props){
       super(props)
       { 
           this.state={
               name : ' ',
               selectedoption:'',
               age:'',
               isbool:false,
              selectedoption:" "
           }
        }
        this.booked=this.booked.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.onValueChange=this.onValueChange.bind(this)
   }
  handleChange(event){
      const name = event.target.name
      const age = event.target.age
     
    this.setState(
        {
         [name] :event.target.value,
         [age]:event.target.value,
        
        }
    )
 }
 onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

   booked(event)
   {  
       event.preventDefault()
       this.setState({
           isbool : true
       })
     
      //  alert("Hi")
       console.log(this.state.selectedoption)
       userhitoryjson.buspassanger.push(userpushdetails)
       console.log(userhitoryjson)
       bushistoryjson.userbusbooking.push(bushistorypushdetails)
       console.log(bushistoryjson)
     
      }
    render(){
    let context = this.context
    const seats = this.props.value
    const fare = this.props.fare
    const selectSeats = this.props.value.length
    let userMobile = context.mobile
    console.log(seats)
    let id=this.props.id
    let userid=this.props.userid
    let data =this.props.data
    let amnt=selectSeats*fare
    let date=this.props.date
    let busNo=this.props.busno
    console.log(userid)
    userpushdetails= { 
          userbusbookingid:id,
           name :this.state.name,
           mobile:userMobile,
           seatnumber:seats.map(elem=> {return elem})
       }
    bushistorypushdetails={
        
            id:id,
            mobilenumber:userMobile,
            userId:userid,
            busno:busNo,
            totalfare:amnt,
            numberofseats:selectSeats,
            date:date
        
       }
       console.log(bushistorypushdetails)
console.log(selectSeats)
  return(
      <div >
          {  this.state.isbool?null:  
          <div class='finaltick'><form class='passengerform' onSubmit={this.booked}>
           <label><span class='seatno'>Seat No:{seats.map(element => {
                         return element+" "
                   })}</span><br/>
          <label for='name'>Passenger Name:<input class='inputname'  type='text' name='name' onChange={this.handleChange}/></label>
         <div className="radio">
          <label>
            <input  class='radio'
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
          <label >
            <input   class='radio'
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
       <label for='age'>Age<input type='text' name='age' onChange={this.handlechange}  class='inputname' /></label>
      </label>
                   
      TotalFare:{selectSeats*fare} 
        
      <input type='submit'  class='submit'/>
      </form></div> }
  {this.state.isbool? 
     <Router>
      <Link to='/'></Link>
      <Link to='/ticket'/>
      <Route path='/'><Redirect to='/ticket'></Redirect></Route>
      <Route path="/ticket" render={() => <Ticket fare={amnt}/>} /></Router> : null}
        </div>
        )
    }
}
export default TicketForm