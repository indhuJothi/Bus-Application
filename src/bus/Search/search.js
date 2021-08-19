import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
import TableData from '../busPage/buslistTable';
import bushistoryjson from '../../busHistory.json'
// import {userContext} from '../../context'
import {busContext} from '../../busContext'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
// let date
let bushistorydata =bushistoryjson

class Search extends React.Component{
   
    constructor(){
        super();
        this.state={
          visible:false,
            value:" ",
            tovalue:'',
            dateVal:" ",
            button:false,
            showsearch:true

        }
        this.showSource = this.showSource.bind(this)
        this.ShowtoValue= this.ShowtoValue.bind(this)
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
   
 
    dateChange(e){
        this.setState({ dateVal:e.target.value})
     
    }

    showTable(){

        
        this.setState({
            button:true,
            showsearch:false
        })
    }



    render(){ 
        // context = this.context
        // let name=context.user
       
        const value = this.state.value;
        const toValue= this.state.tovalue;
        const dateVal=this.state.dateVal
        let previd ,prevuserid
        bushistorydata.userbusbooking.filter((element)=>{
            previd=parseInt(element.id)
            prevuserid=element.userid

        })
        const id = previd +1
        const userid =prevuserid+1
        console.log(value)
        console.log(id,userid)
        let searchdet = {
            from :value,
            to : toValue,
            date:dateVal,
            id:id,
            userid:userid
        }  
        console.log(searchdet)
    return(
          
          <div>  
     <div class='searchContainer'>
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
       </div>
    {this.state.button ? <TableData/>:null}
    {this.state.button ? localStorage.setItem("searchdetails",JSON.stringify(searchdet)):null}
         
</div>
   )
  }
}


export default Search