import React from 'react'
import Main from './common/main'
import Menu from './common/route'
import RouteTable from './common/routeprocess'
let userloggedin 
class Page extends React.Component{
    constructor(props)
    {
        super(props)
        {
           this.state={
                userloggedin: false
           }
        }
        this.isuserlogin = this.isuserlogin.bind(this)
        
    }
    isuserlogin(value){
        userloggedin = value
        
        console.log(value)
    }
 
    render(){

        let isuserlogin = this.isuserlogin
        let userloggedin = this.state.userloggedin
        return(
            <>
             <RouteTable isuserlogin={isuserlogin.bind(this)} />
             {/* <Main username={userloggedin} /> */}
            
            
            </>
        )
    }
}

export default Page