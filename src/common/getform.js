import React from "react"
import Profile from "./userprofile"

class Getform extends React.Component{
    constructor(props)
    {
        super(props)
        {
          this.state={
              name : " ",
              show:false
          }
        }
        this.handle=this.handle.bind(this)
        this.getsubmit=this.getsubmit.bind(this)
    }

    handle(e)
    { 
        const name = e.target.name
        this.setState({
            [name ]: e.target.value
        })
    }
    getsubmit(e)
    { 
        this.setState({
            show:true
        })

    }
    render()
    {
        let show=this.state.show
        let getname=this.props.getname
        // let name=this.state.name
        return(
            <>
            <input type ="text" name="name" onChange={this.handle} ></input>
            <button  onClick={this.getsubmit}>submit</button>
            {show ? <Profile/>:null}
            {show ? getname(this.state.name,false) :null }
            </>
        )
    }
}

export default Getform