import React from "react"
import userhistory from '../userHistory.json'
import Main from "./main"
import Menu from "./route"
import "./ticket.css"

let userHistoryjson = userhistory
let userBookingid,name,mobile,stno
class Ticket extends React.Component{
    constructor()
    {
        super()
        {
         this.state={isbool : true}
        }
        this.submit=this.submit.bind(this)
    }
  submit()
  {
   this.setState({
       isbool:false
   })
  

  }
    render()
    {
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
        let selectSeats=localStorage.getItem("arr") 
        return (
        
        <div >
         <Main/>
         <Menu/>
        <div class="ticket">
         <h1>Booking Details</h1>
         <span class="info">Userbookingid:</span>{userId}<br></br>
         <span class="info">Name:</span> {sessionStorage.getItem("name")}<br></br>
         <span class="info">Mobile:</span> {sessionStorage.mobile}<br></br>
         <span class="info">Seatno:</span> {selectSeats}<br></br>
         <span class="info">Fare:</span> {amnt}<br></br>
         <button onClick={this.submit} > proceed to pay</button>
         </div>
         
         </div>
        )
    }
}


export default Ticket