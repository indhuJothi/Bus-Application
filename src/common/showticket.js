import React from 'react'
import './showticket.css'
import userhitory from '../userhistory.json'
import bushistory from '../bushistory.json'
import {getfinaldata} from '../service/service'
import Ticket from './ticket'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
const  users ={
    user:[

    ]   
}
let userhitoryjson= userhitory
let bushistoryjson = bushistory
let userpushdetails,bushistorypushdetails
console.log(userhitoryjson)
let pushdetails
class ShowTicket extends React.Component{
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
        this.handlechange=this.handlechange.bind(this)
        this.onValueChange=this.onValueChange.bind(this)
   }
  handlechange(event){
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
     
       alert("Hi")
       console.log(this.state.selectedoption)
       userhitoryjson.buspassanger.push(userpushdetails)
       console.log(userhitoryjson)
       bushistoryjson.userbusbooking.push(bushistorypushdetails)
       console.log(bushistoryjson)
     
   }


    render(){
    const seats = this.props.value
    const fare = this.props.fare
    const selectseats = this.props.value.length
    console.log(seats)
    const usermobile = this.props.usermobile
    let id=this.props.id
    let userid=this.props.userid
    let data =this.props.data
    let amnt=selectseats*fare
    let date=this.props.date
    let busno=this.props.busno
    
    
    userpushdetails= { 
        userbusbookingid:id,
           name :this.state.name,
           mobile:usermobile,
           seatnumber:seats.map(elem=> {return elem})
       }
    bushistorypushdetails={
        
            id:id,
            mobilenumber:usermobile,
            userid:userid,
            busno:busno,
            totalfare:amnt,
            numberofseats:selectseats,
            date:date
        
       }
console.log(selectseats)
  return(
      <div class='finalticket'>
          {  this.state.isbool?null:   <form class='passengerform' onSubmit={this.booked}>
          
                    <label><span class='seatno'>Seat No:{seats.map(element => {
                         return element+" "
                           
                    })}</span><br/>
                      <label for='name'>Passenger Name:<input class='inputname'  type='text' name='name' onChange={this.handlechange}/></label>
                      <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
          <label>
            <input
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
                   
               TotalFare:{selectseats*fare} 
        
                 <input type='submit'  class='submit'/>
              </form>}

   {/* <Redirect to='/ticket'></Redirect>s */}
   {this.state.isbool? 
   <Router>
    <Link to='/'></Link>
  <Link to='/ticket'/>
 <Route path='/'><Redirect to='/ticket'></Redirect></Route>
   <Route path="/ticket" render={() => <Ticket fare={fare}/>} /></Router> : null}
            </div>
        )
    }
}
// class Ticket extends React.Component{

//     render()
//     {    let getdata=getfinaldata()
//         return(
//          <p>
//             {getdata}
//          </p>
//         )
//     }
// }
export default ShowTicket