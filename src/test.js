import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Search from './bus/search';
import App from './common/App';
import Menu from './common/route';

class Routeg extends React.Component{
    render(){
        return(
            <Router>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/book-ticket'>about</Link></li>
                </ul>
                <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/book-ticket' component={Search}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routeg