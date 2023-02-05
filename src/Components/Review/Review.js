import React from 'react';
import './review.css'
import { StarIcon } from '@heroicons/react/24/solid'

const Review = (props) => {
    const {name,image_url, rating,review } = props.review;

    return (
        <div className='review col-md-3 col m-5'>
            <div className='img-review'>
                <img src={image_url} alt="" />
                <h4>{name}</h4>
            </div>
            <p>{review}</p>
            <h6>Rating: {rating}/5</h6>
        </div>
    );
};

export default Review;