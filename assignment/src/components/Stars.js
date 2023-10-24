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
        if (`stars-${this.props.id}` > 0 && `stars-${this.props.id}` < 6){
            this.setState.starLevel = `stars-${this.props.id}.value`
        }
    }

    render(){
        return(
            <div>
                <h3>{this.state.starLevel}</h3>
                <input name={`stars-${this.props.id}`}></input>
                <button onClick={this.handleStars}>Submit Stars</button>
            </div>
        )
    }
}