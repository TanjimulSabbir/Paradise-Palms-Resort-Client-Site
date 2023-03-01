import React from 'react';
import img1 from '../../../Assets/images/Banner02/welcome-img-1.jpg'
import img2 from '../../../Assets/images/Banner02/welcome-img-2.jpg'

const Banner02 = () => {
    return (
        <div className='bg-white py-24 px-4 sm:px-8 md:px-10 lg:px-14'>
            <div className='lg:flex lg:justify-center'>
                <div className='flex space-x-2 px-3 justify-center items-center'>
                    <img src={img1} alt="welcome" />
                    <img src={img2} alt="welcome" />
                </div>
                <div className='px-2 mt-10 space-y-3 mb-4 sm:px-5 md:px-10 lg:px-0 lg:ml-14 lg:mt-0 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-diplayFair font-bold leading-tight'>Welcome to our Resort Paradise Palms</h1>
                    <h5 className='text-lg font-lora'>Welcome to our luxurious hostel and restaurant, where we strive to provide the ultimate vacation experience for all our guests..</h5>
                    <p className='font-openSans text-gray-800 text-justify pb-10 lg:pb-4'>Our restaurant offers a variety of delicious, locally-sourced cuisine, served in a warm and inviting atmosphere. Whether you're looking to relax after a day of exploring, or celebrate a special occasion, our restaurant is the perfect place to dine. Our friendly staff are always on hand to help with anything you need, and we are committed to ensuring that you have an unforgettable stay with us.</p>
                    <button className='Btn-Primary'>Know More</button>
                </div>
            </div>
        </div >
    );
};

export default Banner02;