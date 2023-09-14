import React from 'react'
import ReplyButton from './reply-button';
import LikeButton from './like-button';

export default class Comment extends React.Component{
    render(){
        return(
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    {this.props.username} {this.props.date}
                </div>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <div>
                    <LikeButton/>
                    <ReplyButton/>
                </div>
            </div>
        )
    }
}