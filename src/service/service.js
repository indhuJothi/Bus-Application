import data from '../user.json'
import busdata from '../bus.json'
import bushistory from '../bushistory.json'
import userhistory from '../userhistory.json'
let jsondata = data
let busjson = busdata
let bushistoryjson = bushistory
let userhitoryjson=userhistory
console.log(jsondata)
console.log(busjson)
export default function validatelogin(mobilenum,valpassword) 
{
    let returnval
    jsondata.user.filter((element)=>{
    if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
    { 
       returnval = true 
     }
   
    }
    
    )
    return( returnval )
 }


export function getpassword(mobilenum,valpassword)

{  let jsonpass
 jsondata.user.filter((element)=>{
if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
     { jsonpass = element.password}
         
   }) 
   return jsonpass
 }
      
export function getmobile(mobilenum,valpassword)
{
      let jsonmobile
      jsondata.user.filter((element)=>{
      if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword))
      {
       jsonmobile = element.password
      }
    }) 
      return jsonmobile
}

         
export function getemail(mobilenum,valpassword,email)
{ 
    let jsonemail
   jsondata.user.filter((element)=>{
   if((element.mobile === parseInt(mobilenum) )&& (element.password === valpassword) && (element.email === email))
         {
            jsonemail = element.email
         }
        
     }) 
      return jsonemail
}


export function getusername(mobilenum)
{
      let username
      jsondata.user.filter((element)=>{
         if(element.mobile===parseInt(mobilenum))
         {
            username = element.name
         }
      })
      return username
}

export function getuseremail(mobilenum)
{
      let useremail
      jsondata.user.filter((element)=>{
         if(element.mobile===parseInt(mobilenum))
         {
            useremail=element.email
         }
      })
      return useremail
}

export function getbusdetails(from,to)
{
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
      

export function getbushistory()
{
      let bushistory 
     return bushistory = bushistoryjson.userbusbooking
}

export function getfinaldata()
{
      let finaldata
      return finaldata =userhistory.buspassanger
}
