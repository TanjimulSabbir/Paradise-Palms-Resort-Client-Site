import React from 'react';
import Gallary from '../../../JsonFiles/Gallery.json'

const B10Cards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                Gallary.map(photo => {
                    const { title, img, } = photo;
                    return (
                        <div className='card'>
                        <div className="rounded">
                            <figure><img src={`/image/Banner10/${img}`} className='h-[320px] w-full rounded' alt="gallery" /></figure> 
                            <h2 className="card-title pl-2">{title}</h2>
                        </div>
                        
                        </div>
                    )
                })
            }
        </div>
    );
};

export default B10Cards;