import React, { useState } from 'react'

function ReviewForm(props) {

  const [name,setName] = useState('');
  const [post, setPost] = useState('');


  const handleClick = (e) => {
    const review = {
      name: name,
      post: post,
    };

    props.uploadReview(review);

    setName('');
    setPost('');

  }

  return (
    <div>
      <form>
        <input name='name' placeholder='your name' value={name} onChange={(e) => setName(e.target.value)}/>
        <br></br>
        <textarea name='post' placeholder='type review here' value={post} onChange={(e) => setPost(e.target.value)}></textarea>
      </form>
      <button onClick={handleClick}>Submit review</button>
    </div>
  )
}

export default ReviewForm