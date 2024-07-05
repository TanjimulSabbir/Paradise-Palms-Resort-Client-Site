import React from 'react';
import img1 from '../images/heading.jpg';
import "../../../style/animation.css"

const RoomsHeader = () => {
    return (
        <div className='rightSliderSlow'>
            <img src={img1} className='lg:h-[250px] lg:w-full' alt="" />
        </div>
    )
}

export default RoomsHeader