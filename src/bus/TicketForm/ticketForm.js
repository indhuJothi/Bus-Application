import React from 'react'
import './ticketForm.css'
import '../busPage/buslistTable.css'
import userhitory from '../../userHistory.json'
import bushistory from '../../busHistory.json'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { userContext } from '../../context'
import Main from '../../common/main'
import Menu from '../../common/route'

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
     
      
       console.log(this.state.selectedoption)
       userhitoryjson.buspassanger.push(userpushdetails)
       console.log(userhitoryjson)
       bushistoryjson.userbusbooking.push(bushistorypushdetails)
       console.log(bushistoryjson)
     
      }
    render(){
    let busdetails =JSON.parse(localStorage.getItem("busdetails"))
    let searchdetails=JSON.parse(localStorage.getItem("searchdetails"))
    let userMobile = sessionStorage.getItem("mobile")
    let seatcount = localStorage.getItem("seatcount")
    console.log(seatcount)
    
    let fare =busdetails.fare
    console.log(fare)
    let amnt=seatcount*fare
    let date= searchdetails.date
    console.log(amnt)

    let userId=searchdetails.userid
    let id = searchdetails.id
    let busNo=busdetails.busNo
    let selectSeats=localStorage.getItem("arr")
   console.log(userId)
   
    userpushdetails= { 
          userbusbookingid:userId,
           name :this.state.name,
           mobile:userMobile,
         
       }
    bushistorypushdetails={
        
            id:userId,
            mobilenumber:userMobile,
            userId:userId,
            busno:busNo,
            totalfare:amnt,
            numberofseats:seatcount,
            date:date
        
       }
       let seatss=localStorage.getItem("arr")
        console.log(seatss)
       console.log(bushistorypushdetails)
console.log(selectSeats)
  return(
      <div >
           <Main/>
           <Menu/>
          <div class='finalticket'>
          <form class='passengerform' onSubmit={this.booked}>
           <label ><span class='seatno'>Seat No:{selectSeats}</span><br/>
          <label  for='name'>Passenger Name:<input class='inputname'  type='text' name='name' onChange={this.handleChange}/></label>
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
                   
       TotalFare:{amnt}
        
      <input type='submit'  class='submit'/>
      </form>
      </div> 
       {this.state.isbool? <Redirect to="/ticket"/>: null}
     </div>
        )
    }
}
export default TicketForm