import React from "react"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import App from "./App"

class Loginpage extends React.Component{
    constructor(){
    super()
    {

    }
}



    render()
    {
        return(
            <div>
                <Router>
            
            <ul>
                <li><Link to='/'>
                </Link>
                <Link to='/login'>
                </Link></li>
                </ul>
                <Switch>
                <Route exact path='/'>
                <Redirect to='/login'></Redirect>
                </Route>
                <Route exact path='/login' component={App}></Route>
                </Switch>
            </Router>
            </div>
        )

        
    }
   
}

export default Loginpage