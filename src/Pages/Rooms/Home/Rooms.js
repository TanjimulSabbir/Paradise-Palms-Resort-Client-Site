import React from 'react';
import Breadcumb from '../../../Components/Shared/Breadcumb';
import useTitle from '../../../Hooks/useTitle';
import RoomsBody from './RoomsBody';
import RoomsHeader from './RoomsHeader';

const Rooms = () => {
    useTitle('Rooms')
    return (
        <div>
            <RoomsHeader />
            <div className='py-24 UniversalPadding bg-gray-200'>
                <RoomsBody />
            </div>
            <Breadcumb />
        </div>
    );
};

export default Rooms;