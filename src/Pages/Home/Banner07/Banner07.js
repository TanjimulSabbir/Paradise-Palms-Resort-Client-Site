import React from 'react';
import { Link } from 'react-router-dom';

const Banner07 = () => {
    return (
        <div className='min-h-screen w-full bg-B7bg bg-cover bg-center bg-no-repeat bg-fixed relative'>
            <div className='UniversalPadding absolute inset-0 flex justify-start items-center'>
                <div className='sm:w-1/2 opacity-100'>
                    <h1 className='headingM text-black leading-snug mb-16 mid-lg:w-3/4'>Book online today and lookforward to a relaxing stay</h1>
                    <Link to="/services" className='Btn-Primary'>Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner07;