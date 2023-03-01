import React from 'react';
import Breadcumb from '../../../Components/Shared/Breadcumb';
import img1 from '../images/heading.jpg'

const RoomsHeader = () => {
    return (
        <div className='relative bg-black'>
            <img src={img1} alt="" className='' />
            <div className='absolute inset-0 flex items-center bg-black bg-opacity-40 UniversalPadding'>
                <Breadcumb />
            </div>
        </div>
    )
}

export default RoomsHeader