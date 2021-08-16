import React from 'react';
import '../index.css'
import logo from'../signlogo.jpg'
import './main.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';
import Historytable from '../user/historytable';
import Search from '../bus/search';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
           component : false,
           othercomponent:true,
           tr:false

        }
        this.change = this.change.bind(this)
    
    }

    change(){
        let update = !this.state.component
        let otherupdate =!this.state.othercomponent
       this.setState({
           component : update,
           othercomponent : otherupdate,
           isLogin:true,
          

       })
    }

    componentDidUpdate()
    {
        this.setState({
            tr:true
        })
    }



    render(){
        let user= this.props.username
        let tr = this.state.tr
        console.log(user)
        console.log(tr)
        return(
            <div class="body">
               
            <div class='header'>   
            <span class='apptitle'>Bus Booking App</span>     
                   
                    
                     </div> 
                     <a class='logobut'  onClick={this.change} >
                        <img src={logo}   class='signuplogo' ></img> {user ? 'Indhu': null} 
                       
                     </a>
                     {/* {userloggedin ? 'Indhu': null}  */}
                     
                
             
             
            </div>
            
        )
    }
}

export default Main