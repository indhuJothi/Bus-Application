import React from 'react'
import Item from './listitems';
import To from './to';
import './search.css'
import Tabledata from '../user/tabledata';
import bushistoryjson from '../bushistory.json'
import {usercontext} from '../context'
let date
let bushistorydata =bushistoryjson
let context
class Search extends React.Component{
    static contextType = usercontext
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
        let name=context.user  
        const value = this.state.value;
        const tovalue= this.state.tovalue;
        console.log(name)
        let username = context.user
        console.log(username)
        let useremail=context.email
        console.log(useremail)
        let usermobile = context.mobile;
        let userpass = context.password;
        let userdet ={
          user :username,
          mobile:usermobile,
          password :userpass,
          email : useremail
              }
        let previd ,prevuserid
        bushistorydata.userbusbooking.filter((element)=>{
            previd=parseInt(element.id)
            prevuserid=element.userid

        })
        const id = previd+1
        const userid =prevuserid+1
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
        <usercontext.Provider value={context}>
        <Tabledata id ={id} userid={userid} date={date} value={value} tovalue={tovalue}/>
        </usercontext.Provider>:null}
</div>
   )
  }
}


export default Search