import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./UserLogin/App";
import Search from '../bus/Search/search'
import Ticket from './ticket';
import Menu from './route';
import TableData from '../bus/busPage/buslistTable';
import { userContext } from '../context';
import Profile from './userprofile';


let user, pas,data
class RouteTable extends Component {

	constructor(props){
		super(props)
		{
			this.state={
        user:" ",
        pas:" ",
        username:" ",
        getvalue:false,
        useremail:" "
      }
			
		}
        this.givetabledatas= this.givetabledatas.bind(this)
       
        this.isuserlogin=this.isuserlogin.bind(this)
        this.isuserpass = this.isuserpass.bind(this)
        this.isusername = this.isusername.bind(this)
        this.isuseremail=this.isuseremail.bind(this)

	}
  isusername(val)
  {
    this.setState({
      username:val
    })
  }

isuseremail(val)
{
  this.setState({
    useremail:val
  })
}
  isuserlogin(val)
  {
     this.setState({
       user:val
       })
    
     console.log(val)
  }
  isuserpass(val)
  {
    this.setState({
      pas:val,
      getvalue:true
    })
    console.log(val)
  }
   
  givetabledatas(val)
    {
        data = val
    }
   
render() {
  
   let  isuserLogin = this.isuserlogin
   let isuserPass=this.isuserpass
   let isuserName=this.isusername
   let isuserEmail=this.isuseremail
   let getValue = this.state.getvalue
   let toprint = this.props.isuserlogin
   user = this.state.user
   pas = this.state.pas
   let userName=this.state.username
   let userEmail=this.state.useremail
   let userDet ={
		user :userName,
		mobile:user,
		password :pas,
		email : userEmail
        }
console.log(userName)
  return (
 <div>
     { getValue ? toprint(true): false }
            <div>
	   <Router>
		   
      
           <Route exact path='/'  ><Redirect to='/login'/></Route>
           <Route path="/login" render={() => <App isuseremail={isuserEmail.bind(this)} isusername={isuserName.bind(this)} isuserlogin={isuserLogin.bind(this)} isuserpass={isuserPass.bind(this)}  />} />
            
           <Route path="/search" render={() => 
            
            <Menu usermobile={user} useremail={userEmail} userpass={pas} username={userName}  />
            } />
           <Route path="/bookticket" render={() => <userContext.Provider value={userDet}><Search/></userContext.Provider>} />
           <Route path="/tabledata" render={()=><TableData/>}/>
           <Route path="/profile" render={()=><userContext.Provider value={userDet}><Profile/></userContext.Provider>}/>
           <Route path='/ticket'render={() => <Ticket />}/>
            
         
	     </Router>


     </div>
    </div>
);
}
}



export default RouteTable
