import React from "react";



/*
create layout of movie.
*/
export default class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stars: 0,
            ReviewList: {},
            title: props.title,
            image: props.image,
            description: props.description

        }
    }

    render(){
        return(
            <div className="card w-75 box1">
                <div className='card-header bg-primary text-white'>
                    {this.state.title}
                </div>
                <div className='card-body'>
                    <img src={this.state.image}></img>
                </div>
                <div>
                    {this.state.description}
                </div>

            </div>

        )
    }

}