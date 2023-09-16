import React from 'react';
import Post from './post';

export default class NewsFeed extends React.Component{
    render() {
        // let comment1 = {
        //     content: 'Good job',
        //     username: 'Camille',
        //     date: '09-13-23'
        // };
        // let comment2 = {
        //     content: 'Well done',
        //     username: 'Sheyla',
        //     date: '09-13-23'
        // };
        // let comment3 = {
        //     content: 'nice try',
        //     username: 'larry',
        //     date: '09-13-23'
        // };
        let comments = [
            {
                content: 'Good job',
                username: 'Camille',
                date: '09-13-23'
            },
            {
                content: 'Well done',
                username: 'Sheyla',
                date: '09-13-23'
            },
            {
                content: 'nice try',
                username: 'larry',
                date: '09-13-23'
            }
        ]
        return(
            <div className='container'>
                <Post {...{comments:comments,content: "my post"}} />
                <Post/>

            </div>
        )
    }
}