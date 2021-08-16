import React from 'react'
import '../user/table.css'
// import './traveltable.css'
import SelectSeat from './selectseat'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




class TravelTable extends React.Component{
   constructor(props){
       super(props)
       {
        //    let value = this.props.value;
        //    const tovalue = this.props.tovalue;
        //    const date = this.props.date;
        //    this.value = value
           this.state={

            chennai1 : false,
            chennai2:false,
            value : this.props.value,
            tovalue : this.props.tovalue,
            date : this.props.date,
            madurai : false,
            trichy : false,
            TrichyChennai: '2021-08-27',
            Chennaimadurai1 :'2021-08-18',
            Chennaimadurai2 : '2021-08-27',
            isBook:false
           }
           this.showseats=this.showseats.bind(this)
      
       
       }
       
       
   }
    
showseats(){
    this.setState({
        isBook : true
    })
}
   componentDidMount(){
    this.state.value ==='Chennai' && this.state.tovalue==='Madurai' && this.state.date === this.state.Chennaimadurai1 ? this.setState({chennai1:true}) : this.setState({chennai1:false})
    this.state.value ==='Chennai' && this.state.tovalue==='Madurai' && this.state.date === this.state.Chennaimadurai2 ? this.setState({chennai2:true}) : this.setState({chennai2:false})
    this.state.value ==='Madurai' && this.state.tovalue==='Trichy' ? this.setState({madurai:true}) : this.setState({madurai:false})
    this.state.value ==='Trichy' && this.state.tovalue ==='Chennai' && this.state.date === this.state.TrichyChennai ? this.setState({trichy:true}) : this.setState({trichy: false})
    
   }


   render(){
    const TrichyChennai = this.state.TrichyChennai
    const Chennaimadurai1= this.state.Chennaimadurai1
    const Chennaimadurai2 = this.state.Chennaimadurai2
       return(

           <table class="Table" >
          <thead class="thead">
           <tr>
           <th class='head'>From</th>
           <th class='head'>To</th>
           <th class='head'>Date</th>
           <th class='head'>AvailableSeats</th>
           <th class='head'>BusNo</th>
           <th class='head'>BusName</th>
           <th class='head'>Fare</th>
           <th class='head'>Book Seats</th>
           </tr>
           </thead>
           <tbody class="tbody">
              { this.state.chennai1 ? <tr From='Chennai'>
                   <td>chennai</td>
                   <td >Madurai</td>
                   <td>{Chennaimadurai1}</td>
                   <td>55</td>
                   <td>TN543</td>
                   <td>Red Bus</td>
                   <td>300</td>
                   <button onClick={this.showseats}>Book Seats</button>
                   {this.state.isBook ? <SelectSeat/>: null}
               </tr> : null}
             { this.state.chennai2 ? <tr From='chennai' To='Madurai' >
                   <td >chennai</td>
                   <td >Madurai</td>
                   <td>{Chennaimadurai2}</td>
                   <td>55</td>
                   <td>TN543</td>
                   <td>Blue Bus</td>
                   <td>300</td>
                   <button onClick={this.showseats}>Book Seats</button>
                   {this.state.isBook ? <SelectSeat/>: null}
               </tr> : null
            }
            {  this.state.madurai ? <tr From='Madurai' To='Trichy' >
                   <td >Madurai</td>
                   <td > Trichy</td>
                   <td>31-09-2020</td>
                   <td>65</td>
                   <td>TN523</td>
                   <td>Green Bus</td>
                   <td>150</td>
                   <button onClick={this.showseats}>Book Seats</button>
                   {this.state.isBook ? <SelectSeat/>: null}
               </tr> : null
             }
              {this.state.trichy?  <tr From='Trichy' To="Chennai" >
                   <td >Trichy</td>
                   <td>Chennai</td>
                   <td>{TrichyChennai}</td>
                   <td>87</td>
                   <td>TN523</td>
                   <td>Purple Bus</td>
                   <td>150</td>
                   <button onClick={this.showseats}>Book Seats</button>
                   {this.state.isBook ?	<Route exact path='/book-seat' component={SelectSeat}></Route>: null}
               </tr> : null
   }
   
           </tbody>
       </table>
      
           
       )
   }

}


export default TravelTable