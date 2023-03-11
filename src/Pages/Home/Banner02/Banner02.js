import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/images/Banner02/welcome-img-1.jpg'
import img2 from '../../../Assets/images/Banner02/welcome-img-2.jpg'

const Banner02 = () => {
    return (
        <div className='UniversalPadding bg-white pb-24 pt-10 lg:pt-24'>
            <div className='lg:flex lg:justify-center'>
                <div className='lg:flex lg:space-x-3 px-3 justify-center items-center'>
                    <img src={img1} alt="welcome" className='hidden w-full lg:h-full lg:block' />
                    <img src={img2} alt="welcome" className='w-full lg:max-w-[300px] h-full object-cover' />
                </div>
                <div className='mt-10 lg:space-y-5 mb-4 lg:ml-14 lg:mt-0 lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl mid-lg:text-3xl lg:text-4xl font-diplayFair font-bold leading-tight'>Welcome to our Resort Paradise Palms</h1>
                    <h5 className='text-lg font-lora'>Welcome to our luxurious hostel and restaurant, where we strive to provide the ultimate vacation experience for all our guests..</h5>
                    <p className='font-openSans text-gray-800 text-justify pb-14 lg:pb-14'>Our restaurant offers a variety of delicious, locally-sourced cuisine, served in a warm and inviting atmosphere. Whether you're looking to relax after a day of exploring, or celebrate a special occasion, our restaurant is the perfect place to dine. Our friendly staff are always on hand to help with anything you need, and we are committed to ensuring that you have an unforgettable stay with us.</p>
                    <Link to='/services' className='Btn-Primary'>Know More</Link>
                </div>
            </div>
        </div >
    );
};

export default Banner02;