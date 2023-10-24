import React, { useState } from 'react'

function Stars(props) {
    const [stars, setStars] = useState(0);

    const handleStars = (selectedStars) => {
        setStars(selectedStars);
    };

  return (
    <div>
        <h3>Stars: {stars}</h3>
        <div>
            {[1,2,3,4,5].map((star) =>
            <button
                key={star}
                onClick={()=> handleStars(star)}
                >
                {star}
            </button>
            )}
        </div>

    </div>
  )
}

export default Stars