import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App";
import Search from '../bus/search'
import Ticket from './ticket';
import Menu from './route';
import Tabledata from '../user/tabledata';
import { usercontext } from '../context';
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
   let toprint = this.props.isuserlogin
   let  isuserlogin = this.isuserlogin
   let isuserpass=this.isuserpass
   let isusername=this.isusername
   let isuseremail=this.isuseremail
   let getvalue = this.state.getvalue
   user = this.state.user
   pas = this.state.pas
   let username=this.state.username
   let useremail=this.state.useremail
   let userdet ={
		user :username,
		mobile:user,
		password :pas,
		email : useremail
        }
console.log(username)
  return (
 <div>
     { getvalue ? toprint(true): false }
            <div>
	   <Router>
		    <div>
           <Link class='link' to="/" onClick={this.hide}></Link>
		   <Link class='link' to="/login" onClick={this.hide}></Link>
           <Link class='link' to='/search'></Link>
           <Link class='link' to='/bookticket'></Link>
           <Link class="profile" to="/profile"></Link>
           <Link class='link' to='/ticket'/>
           <Route exact path='/'  ><Redirect to='/login'/></Route>
           <Route path="/login" render={() => <App isuseremail={isuseremail.bind(this)} isusername={isusername.bind(this)} isuserlogin={isuserlogin.bind(this)} isuserpass={isuserpass.bind(this)}  />} />
            
           <Route path="/search" render={() => 
            
            <Menu usermobile={user} useremail={useremail} userpass={pas} username={username}  />
            } />
           <Route path="/bookticket" render={() => <usercontext.Provider value={userdet}><Search/></usercontext.Provider>} />
           <Route path="/tabledata" render={()=><Tabledata/>}/>
           <Route path="/profile" render={()=><usercontext.Provider value={userdet}><Profile/></usercontext.Provider>}/>
           <Route path='/ticket'render={() => <Ticket />}/>
            
            </div>
	     </Router>


     </div>
    </div>
);
}
}



export default RouteTable
