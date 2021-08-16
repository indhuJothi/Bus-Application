import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
// import TravelTable from './traveltabel';
import Tabledata from '../user/tabledata';
import bushistoryjson from '../bushistory.json'
import { element } from 'prop-types';
let date
let bushistorydata =bushistoryjson
class Search extends React.Component{
    constructor(){
        super();
        this.state={
          visible:false,
            value:" ",
            tovalue: '',
            date: " ",
            button:false,
            showsearch:true

        }
        this.showSource = this.showSource.bind(this)
        this.ShowtoValue= this.ShowtoValue.bind(this)
        this.date= this.date.bind(this)
        this.dateChange= this.dateChange.bind(this)
        this.showTable = this.showTable.bind(this)
  
 
    }
    showSource(e){
     this.setState ({
         
         value:e.target.value
     
        
     })
     

    }
    ShowtoValue(e)
    {
        this.setState({
            tovalue:e.target.value
        })
    }
   
    date(e){
        this.setState({
            // date :
           visible : true
           
        })
      }
    dateChange(e){
      date = e.target.value
    }

    showTable(){

        
        this.setState({
            button:true,
            showsearch:false
        })
    }



    render(){   
        const value = this.state.value;
        const tovalue= this.state.tovalue;
        const userpass = this.props.userpass
        const usermobile = this.props.usermobile
        
        let previd ,prevuserid
        bushistorydata.userbusbooking.filter((element)=>{
            previd=parseInt(element.id)
            prevuserid=element.userid

        })
        const id = previd+1
        const userid =prevuserid+1
        // console.log(userpass)
        // console.log(usermobile)
       
        return(
          <div>
            
         {this.state.showsearch?<div class='searchContainer'>
              <div class='FromCol'>
                
              <label > From <select  class='From'  value= {this.state.value} onChange={this.showSource}>
                            <Item/>
                     </select> 
              </label> 
                
              <label> To <select   class='From' value= {this.state.tovalue} onChange={this.ShowtoValue}>
                         <To/>
                     </select> 
             </label>
            <label>Date<input type='date' class='frominput' placeholder = "Date" onChange={this.dateChange}></input> 
           </label>  <button class='buttonclass' onClick={this.showTable}>Search</button></div>
            </div>: null }
          {this.state.button ? <Tabledata id ={id} userid={userid} date={date} usermobile={usermobile} userpass={userpass} value={value} tovalue={tovalue}/>:null}
        </div>
        )
     
    }
}

export default Search