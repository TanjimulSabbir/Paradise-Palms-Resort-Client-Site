import React from 'react';
import ServiceCards from './ServiceCards';

const Service = () => {

  return (
    <div className='UniversalPadding space-y-14'>
      <div className="space-y-14 text-black">
        <h2 className="font-diplayFair text-3xl mid-lg:text-4xl lg:text-5xl font-bold text-black">
          Our Services and Features
        </h2>
        <p className="font-lora text-black text-lg">
          Our resort's stunning architecture and expertly crafted interiors
          create a warm and welcoming atmosphere that guests are sure to love.
          Whether enjoying a delicious meal in the hotel's restaurant,
          unwinding by the pool, or exploring the nearby area, guests will
          find plenty of opportunities to create unforgettable memories.
          Whether looking for a romantic getaway or a family vacation, Our
          resort offers the perfect setting for making lasting memories. So
          why wait? Book your stay today and discover the ultimate in luxury
          and comfort!
        </p>
      </div>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default Service;