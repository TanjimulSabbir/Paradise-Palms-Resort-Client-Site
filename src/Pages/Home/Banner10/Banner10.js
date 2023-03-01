import React from 'react';
import B9Cards from './B10Cards';

const Banner10 = () => {
    return (
        <div className='py-24 UniversalPadding'>
            <div className='lg:w-2/3 p-4'>
                <h2 className='font-diplayFair text-5xl font-bold text-black'>Photo Gallery
                </h2>
                <p className='text-gray-800 font-lora mt-8 text-lg'>Our Photo Gallery combination of professional photos taken by a photographer and customer photos taken by guests. This photo gallery featuring various tourist memories can help potential guests get a better sense of the experiences and activities available at our luxurious resort, and can ultimately help drive bookings.</p>
            </div>
            <div className='mt-14'>
                <B9Cards />
            </div>
        </div>
    );
};

export default Banner10;