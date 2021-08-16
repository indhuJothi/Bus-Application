import React from 'React'
import './right.css'


class Right extends React.Component{


    render(){
        return(
            <form class='formbody'>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Comments' />
            <input type='radio' value="Male"></input>
            <input type='radio' value="Female"></input>
            </form>
        )
    }
}

export default Right