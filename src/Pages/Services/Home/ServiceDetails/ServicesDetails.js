import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTitle from '../../../../Hooks/useTitle';
import Rooms from '../../../Rooms/Home/Rooms';

const ServicesDetails = () => {
    useTitle('ServicesDetails')
    const params = useParams()
    if (params.id === '63e9506a805bbbca73c807f8') {
        return <Rooms></Rooms>
    }

    return (
        <div>
            This service details

        </div>
    );
};

export default ServicesDetails;