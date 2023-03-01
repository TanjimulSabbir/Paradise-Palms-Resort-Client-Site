import React from 'react';
import B3Cards from './B3Cards';

const Banner03 = () => {
    return (
        <div className='bg-bg-banner03 py-24 px-4 sm:px-8 lg:px-14 relative'>
            <div>
                <h2 className='font-diplayFair text-3xl font-bold'>Rooms And Suits</h2>
                <p className='text-b3T-color mt-3'>Pick a room that best suits your taste and bud __</p>
            </div>
            <div className='mt-14'>
                <B3Cards />
            </div>
        </div>
    );
};

export default Banner03;