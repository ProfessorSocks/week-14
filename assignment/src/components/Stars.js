import React from "react";

export default class Stars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            starLevel: 0
        }
        this.handleStars = this.handleStars.bind(this)
    }

    handleStars(){
        if ()
    }

    render(){
        return(
            <input id='stars {index}'></input>
            <button onClick={this.handleStars}>Submit Stars</button>
        )
    }
}