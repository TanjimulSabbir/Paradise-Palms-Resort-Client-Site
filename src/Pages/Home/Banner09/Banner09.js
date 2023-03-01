import React from 'react';
import { useLocation } from 'react-router-dom';
import B09Cards from './B09Cards';

const Banner09 = () => {
    const location = useLocation();
  const pathName=location.pathname;
  const pathHome=pathName==='/'
    return (
        <div className={`${pathHome?'UniversalPadding py-24 ':"lg:px-14"} lg:border-l`}>
            <div className={`${!pathHome&&'hidden lg:block'} p-4`}>
                <h2 className='font-diplayFair text-5xl font-bold text-black'>Blogs
                    <p className='border inline-block border-[#6e3434] h-[1px] w-16 ml-4 items-end'></p></h2>
                <p className={` text-gray-800 font-lora mt-8 text-lg cursor-text`}>Exciting news! Our tourist resort is proud to announce a new offer for our guests. Whether you're looking for a relaxing escape or an adventure-filled getaway, our resort has something for everyone. With breathtaking views, top-notch amenities, and a wide range of activities, you'll never run out of things to do.</p>
            </div>
            <div className='mt-10'>
                <B09Cards />
            </div>
        </div>
    );
};

export default Banner09;