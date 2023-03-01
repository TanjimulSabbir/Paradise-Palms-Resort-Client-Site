import React from 'react';
import img1 from '../../../Assets/images/Banner05/our-hotel-1.jpg'
import img2 from '../../../Assets/images/Banner05/our-hotel-2.jpg'
const Banner05 = () => {
    return (
        <div className='md:flex justify-center items-center px-10 py-24 md:space-x-5 lg:space-x-10'>
            <div className='space-y-8 md:w-3/4 lg:w-2/5 '>
                <h2 className='font-diplayFair font-bold text-4xl md:text-2xl lg:text-4xl leading-tight'>
                    Our hotel has been available for more than <strong className='text-amber-300'>15 years</strong>. We give best service to all.
                </h2>
                <p className='font-lora text-gray-800 text-justify md:text-[14px] lg:text-lg'>Our tour hostel is also equipped with all the amenities you need to make your stay comfortable. We have a fully equipped kitchen, a lounge area with comfortable seating, and a library where you can relax and read a book.</p>
            </div>
            <div className='flex gap-3 mt-10 justify-center items-center'>
                <img src={img1} className='w-1/2 lg:w-full' alt="" />
                <img src={img2} className='w-1/2 lg:w-full' alt="" />
            </div>
        </div>
    );
};

export default Banner05;