import React from "react";

export default class Stars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            starLevel: 0
        }
        this.handleStars = this.handleStars.bind(this)
    }

    handleStars(props){
        if (`stars-${props.id}` > 0 && `stars-${props.id}` < 6){
            this.setState.starLevel = `stars-${props.id}.value`
        }
    }

    render(){
        return(
            <div>
                <h3>{this.state.starLevel}</h3>
                <input id={`stars-${this.props.id}`} name={`stars-${this.props.id}`}></input>
                <button onClick={this.handleStars}>Submit Stars</button>
            </div>
        )
    }
}