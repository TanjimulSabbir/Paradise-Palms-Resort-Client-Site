import React from 'react';
import PageLoading from '../../../Components/Shared/Loading/Loading';
import useGallery from '../../../Hooks/useGallery';


const B10Cards = () => {
    const [Gallary, isLoading] = useGallery()
    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div className='grid grid-cols-4'>
            {
                Gallary?.map(photo => {
                    const { img } = photo;
                    return (
                        <div className="relative flex border-4 border-teal-600 shadow-lg transform transition duration-700 delay-75 hover:scale-150 md:hover:scale-125 hover:z-40 overflow-visible cursor-pointer">
                            <img src={img} alt="Gallery" />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default B10Cards;