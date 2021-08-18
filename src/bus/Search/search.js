import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
import TableData from '../busPage/buslistTable';
import bushistoryjson from '../../busHistory.json'
import {userContext} from '../../context'
let date
let bushistorydata =bushistoryjson
let context
class Search extends React.Component{
    static contextType = userContext
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
        context = this.context
        // let name=context.user  
        const value = this.state.value;
        const toValue= this.state.tovalue;
        // console.log(name)
        // let userName = context.user
        // console.log(userName)
        // let userEmail=context.email
        // console.log(userEmail)
        // let userMobile = context.mobile;
        // let userPass = context.password;
        let previd ,prevuserid
        bushistorydata.userbusbooking.filter((element)=>{
            previd=parseInt(element.id)
            prevuserid=element.userid

        })
        const id = previd +1
        const userid =prevuserid+1
        console.log(id,userid)
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
    {this.state.button ?
        <userContext.Provider value={context}>
        <TableData id ={id} userid={userid} date={date} value={value} tovalue={toValue}/>
        </userContext.Provider>:null}
</div>
   )
  }
}


export default Search