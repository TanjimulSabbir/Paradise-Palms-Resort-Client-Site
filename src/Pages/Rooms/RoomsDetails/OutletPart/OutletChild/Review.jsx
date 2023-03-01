import React from 'react';
import B10Cards from '../../../../Home/Banner10/B10Cards';

const Review = () => {
    return (
        <div>
             <div className='space-y-6'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-diplayFair font-bold leading-tight'>Paradise Palms</h1>
                    <h5 className='text-lg font-lora'>Welcome to our luxurious hostel and restaurant, where we strive to provide the ultimate vacation experience for all our guests..</h5>
                    <p className='font-openSans text-gray-800 text-justify pb-10 lg:pb-4'>Our restaurant offers a variety of delicious, locally-sourced cuisine, served in a warm and inviting atmosphere. Whether you're looking to relax after a day of exploring, or celebrate a special occasion, our restaurant is the perfect place to dine. Our friendly staff are always on hand to help with anything you need, and we are committed to ensuring that you have an unforgettable stay with us.</p>
                    <button className='Btn-Primary'>Know More</button>
                </div>
        </div>
    );
};

export default Review;