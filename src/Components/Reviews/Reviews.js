import React from 'react';
import Review from '../Review/Review';
import ReviewHook from '../ReviewHook';

const Reviews = () => {
    const [reviews, setReviews] = ReviewHook();
    return (
        <div className='pt-5 row justify-content-center'>
            <h1 className='text-center text-warning mt-4'>What our customer says...</h1>
            {
                reviews.map(review=> <Review 
                    review={review} key= {review.id}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;