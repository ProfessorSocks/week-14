import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment'



export default class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
            counts: { like: 0},
            highestCount: 0,
            highestCountName: ''
        };
        this.countClicks = this.countClicks.bind(this)
    }

    countClicks(like){
        this.setState(state => {
            state.counts[like]
                ? state.counts[like] += 1
                : state.counts[like] = 1;
            if(state.count[like] > state.highestCount){
                state.highestCount = state.counts[like];
                state.highestCountName = like;
            }
            return state;

        });
    }

    render() {
        let tempComments = this.state.comments;
        // setTimeout(() => {
        //     this.setState({content: 'timeout'},// og timeout to switch it
        //         () => setTimeout(() => {
        //             this.setState({content: 'back again'}) // second timeout to flipp it back again
        //         }, 2000)// second timeout countdown
        //     );
        // }, 2000);//og timeout countdown



        // setTimeout(() => {
        //     this.setState(x => ({count: x.count + 1}), () => console.log(this.state.count) );
        // }, 2000);

        let comments;
        if (this.state.comments){
            comments = this.state.comments.map((comment,index) => <Comment key={index} {...comment}/>);
            // for (let comment of this.state.comments){
            //     comments.push(<Comment {...comment}/>)
            // }
        }
        return (
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    Username and time
                </div>
                <div className='card-body'>
                    {this.state.content}
                </div>
                <div>
                    <h2>{this.highestCountName}</h2>
                    <LikeButton
                        name='like'
                        count={this.state.counts.like}
                        onClick={this.countClicks}
                    />
                    <ReplyButton/>
                    {comments}

                </div>
            </div>
        );
    }
}
