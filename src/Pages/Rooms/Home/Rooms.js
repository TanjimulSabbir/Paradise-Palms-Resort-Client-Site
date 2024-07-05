import React from 'react';
import Breadcumb from '../../../Components/Shared/Breadcumb';
import useTitle from '../../../Hooks/useTitle';
import RoomsBody from './RoomsBody';
import RoomsHeader from './RoomsHeader';
import "../../../style/animation.css"

const Rooms = () => {
    useTitle('Rooms')
    return (
        <div className='downSlider bg-gray-200'>
            {/* <RoomsHeader /> */}
            <div className='topSlider pb-24 pt-10 UniversalPadding '>
                <RoomsBody />
            </div>
            <Breadcumb />
        </div>
    );
};

export default Rooms;