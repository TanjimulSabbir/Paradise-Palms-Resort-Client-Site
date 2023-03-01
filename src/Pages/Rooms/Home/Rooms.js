import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import RoomsBody from './RoomsBody';
import RoomsHeader from './RoomsHeader';

const Rooms = () => {
    useTitle('Rooms')
    return (
        <div className=''>
            <RoomsHeader />
            <div className='py-24 UniversalPadding bg-gray-200'>
                <RoomsBody />
            </div>
        </div>
    );
};

export default Rooms;