import React from 'react';
import Breadcumb from '../../../Components/Shared/Breadcumb';
import useTitle from '../../../Hooks/useTitle';
import RoomsBody from './RoomsBody';
import RoomsHeader from './RoomsHeader';

const Rooms = () => {
    useTitle('Rooms')
    return (
        <div className='bg-gray-200'>
            <RoomsHeader />
            <div className='py-24 UniversalPadding '>
                <RoomsBody />
            </div>
            <Breadcumb />
        </div>
    );
};

export default Rooms;