// import React from 'react'
import data from '../user.json'
// import login from '../common/login'
// import { Route, Router, Switch } from 'react-router-dom'
// import BookTicket from '../common/bookticket'
import busdata from '../bus.json'
import bushistory from '../bushistory.json'
import userhistory from '../userhistory.json'
import { element } from 'prop-types'
// import { func } from 'prop-types'

let jsondata = data
let busjson = busdata
let bushistoryjson = bushistory
let userhitoryjson=userhistory
console.log(jsondata)
console.log(busjson)
export default function validatelogin(mobilenum,valpassword) {
        let returnval
        jsondata.user.filter((element)=>{
            if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
            {
          
            returnval = true
            
            // console.log("hello")
            }
            // console.log(element.mobile)
        
        })
      //   console.log(valpassword)
      //   console.log(mobilenum)
        return( returnval
         
        )
        }
export function getpassword(mobilenum,valpassword){

         let jsonpass
         jsondata.user.filter((element)=>{
            if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
            {
               jsonpass = element.password
            }
           
           }  ) 
         return jsonpass
      }
      
export function getmobile(mobilenum,valpassword){

      let jsonmobile
      jsondata.user.filter((element)=>{
         if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
         {
            jsonmobile = element.password
         }
        
        }  ) 
      return jsonmobile
   }

         
export function getemail(mobilenum,valpassword,email){

      let jsonemail
      jsondata.user.filter((element)=>{
         if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword) && (element.email === email))
         {
            jsonemail = element.email
         }
        
        }  ) 
      return jsonemail
   }
export function getbusdetails(from,to){
      let busdatas=[]
      busjson.bus.filter((element)=>{
         if((element.from===from) && (element.to===to)){
            console.log(element.from)
            console.log(element.to)
            busdatas = element
         }
      })
      console.log(busdatas)
      return busdatas

   }
      
   export function getbushistory(){
      let bushistory 
     return bushistory = bushistoryjson.userbusbooking
   }

export function getfinaldata(){
      let finaldata
      return finaldata =userhistory.buspassanger
   }