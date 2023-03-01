import React from 'react';

const Pricing = () => {
    return (
        <div className="min-h-screen">
        <h2 className="font-diplayFair text-5xl font-bold text-black">
         Pic-up Your Best Choice and Special Offers
          <p className="border inline-block border-[#6e3434] h-[1px] w-16 ml-4 items-end"></p>
        </h2>
        <p className="text-gray-800 font-lora mt-8 text-lg">
          Exciting news! Our tourist resort is proud to announce a new offer for
          our guests. Whether you're looking for a relaxing escape or an
          adventure-filled getaway, our resort has something for everyone. With
          breathtaking views, top-notch amenities, and a wide range of
          activities, you'll never run out of things to do. Luxury
          accommodations: A comfortable and well-appointed room or suite with
          romantic touches such as rose petals, champagne, and chocolates.Fine
          dining: A romantic dinner for two at a hotel restaurant or a private
          candlelit dinner on a terrace with views.Relaxing activities: Access
          to a pool or hot tub, yoga or meditation classes, and guided walks in
          nature.Wellness classes: Cooking classes, healthy eating workshops,
          and fitness classes.Private downtime: Access to quiet or secluded
          areas of the resort, such as a private beach or garden.
        </p>
        <div className="flex justify-between md:justify-around items-center bg-rose-200 mt-8 mid-lg:mx-4">
          <h2 className="pl-4 text-sm  text-black">
            21% Off on this packages
          </h2>
          <p className="Btn-Primary">Book Now</p>
        </div>
        <div className="flex justify-between md:justify-around items-center mt-8 mid-lg:p-4 bg-rose-200 mid-lg:mx-4">
          <h2 className="pl-4 text-sm  text-black">
            15% Off on this packages
          </h2>
          <p className="Btn-Primary">Book Now</p>
        </div>
      </div>
    );
};

export default Pricing;