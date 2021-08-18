import React from "react"
import userhistory from '../userHistory.json'

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
        let fare =this.props.fare
        return <div>{this.state.isbool?<p class="finaltick">
          {userHistoryjson.buspassanger.map((elem)=>{
              userBookingid =elem.userbusbookingid
              name=elem.name
              mobile=elem.mobile
              stno=elem.seatnumber+" "
              console.log(userBookingid)
          })
          }
       
         Booking Details
         <p>Userbookingid:{userBookingid}</p>
         <p>Name: {name}</p>
         <p>Mobile: {mobile}</p>
         <p>Seatno: {stno}</p>
         <p>Fare: {fare}</p>
         <button onClick={this.submit} > proceed to pay</button>
         </p>:null}
      
         </div>
        
    }
}


export default Ticket