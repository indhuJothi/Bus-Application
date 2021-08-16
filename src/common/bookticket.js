import React from 'react'
import './bookticket.css'
import ShowTicket from './showticket'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
class BookTicket extends React.Component{

  constructor(){
    super()
    {
      this.state={
        values:[],
        showticket :false,
        letsshow : true
      }
      this.getvalue=this.getvalue.bind(this)
      this.validate = this.validate.bind(this)
    }
  }
  getvalue(e){
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
  letsshow:false
})

}

  render()
  {
  let data =this.props.value
  let seats,fare
  let id=this.props.id
  let userid=this.props.userid
  let usermobile = this.props.usermobile
  let userpass = this.props.userpass
  let date= this.props.date
  let busno 
  console.log(date)
  let availableSeat =  data.filter(function(element){
           seats= element.NoOfSeats
           fare =element.fare
           busno=element.busno

           return data
  })
  console.log(busno)
  console.log(seats)
     let seatslength=[]
     for(let i=0;i<seats;i++){
         seatslength.push(i)
     }
     console.log(seatslength)
     console.log(fare)
    const arr= this.state.values
    return(
      <div>
    {this.state.letsshow?  <div  class='booktable'>
      { seatslength.map(element=>{
        console.log("hi")
        if(element%2==0)
        return <label class="main"><input type="checkbox" value={element+1} onClick={this.getvalue}/><span class="checkmark">{element+1}</span></label>
       else
        return<label class="main"><input type="checkbox" checked="checked" value={element+1} onClick={this.getvalue}/><span class="checkmark">{element+1}</span></label>
        
      }
 
          )}
           <button type='submit' class="seatbutton"  onClick={this.validate}>Book Seats</button>
           </div> : null}
      {this.state.showticket? <Router>
    <Link to='/'></Link>
  <Link to='/show-ticket'/>
 <Route path='/'><Redirect to='/show-ticket'></Redirect></Route>
   <Route path="/show-ticket" render={() => <ShowTicket 
   busno={busno} 
   data={data} 
   date={date} 
   usermobile={usermobile} 
   userpass={userpass} 
   fare={fare}
    value={arr}
    id={id} 
    userid={userid}/>} /></Router> : null}
      
       </div>)}}
    




export default BookTicket