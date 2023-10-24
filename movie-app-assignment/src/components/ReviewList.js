import React from 'react'
import ReviewForm from './ReviewForm'
import { upload } from '@testing-library/user-event/dist/upload'

function ReviewList(props) {
    const listOfReviews = []

    const uploadReview = (review) => {
      listOfReviews.push(review)
    }

  return (
    <div>
      <ReviewForm id={props.id} uploadReview={uploadReview}/>
        {listOfReviews.map((review)=> 
        <div>
            <h3>{review.name}</h3>
            <h6>{review.desc}</h6>
        </div>)}
    </div>
  )
}

export default ReviewList