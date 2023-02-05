import React from 'react';
import { NavLink } from 'react-router-dom';
import Review from '../Review/Review';
import ReviewHook from '../ReviewHook';
import './Home.css'

const Home = () => {
        const [reviews, setReviews] = ReviewHook();
    return (
        <div>
            <div className='home pt-5 px-4'>
            <h1 className='text-warning text-center pt-5'>Marvel's Spider-Man Remastered</h1>
            <p className='text-white text-center'>"Marvel's Spider-Man Remastered" is a remastered version of the 2018 video game "Marvel's Spider-Man." The game is set in a fictionalized version of New York City and follows Peter Parker/Spider-Man as he battles various villains and tries to save the city. The remastered version features improved graphics and all of the DLC content from the original game. It's an action-adventure game with fast-paced combat, web-slinging, and an open-world setting that allows players to explore and interact with the city. The player can also collect various collectibles and upgrade gadgets and abilities. Overall, "Marvel's Spider-Man Remastered" is a must-play for fans and newcomers alike.</p>
                <div className='nab-btn'>
                    <NavLink className='buy-link text-center' to='/'>GAME DETAILS</NavLink>
                    <NavLink className='buy-link text-center' to='/DASHBOARD'>DASHBOARD</NavLink>
                    <NavLink className='buy-link text-center' to='/' >BUY NOW</NavLink>
                </div>
            </div>
            <div className='home-review pt-5 row justify-content-center'>
            <h2 className='text-center text-warning'>All the reviews from supporters...</h2>
            {
                reviews.map(review=> <Review 
                    review={review} key= {review.id}
                ></Review>).slice(0,3)
            }
            <div className='w-auto mb-4'>
                    <NavLink className='buy-link bg-info fw-bold text-white p-2 rounded-pill  px-4 w-auto text-center' to='/Reviews'>SEE ALL THE REVIEWS</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;