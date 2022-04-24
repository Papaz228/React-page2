import React, { Component } from 'react'
class ClassExample extends Component{
    constructor(){
        super()
        this.state={
            greeting: 'Do you want to go?'
        }
    }
    guestGo(){
        this.setState({greeting: 'Good luck'})
    }
    render(){
        if(this.props.name==="Guest"){
        return(
            <div>
                <h2>Hello {this.props.name}</h2>
                <h3>{this.state.greeting}</h3>
                <button onClick={()=> this.guestGo()}>Go</button>

            </div>
        )
        }
        else{
            return(
                <div>I am sor sorry</div>
            )
        }

    }
}
export default ClassExample
