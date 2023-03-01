import React from "react";
import img1 from "../../../Assets/images/Banner08/img-1.jpg";
import img2 from "../../../Assets/images/Banner08/img-2.jpg";
const Banner08 = () => {
  return (
    <div className="py-24 UniversalPadding bg-gray-200">
      <div className="lg:w-2/3 p-4">
        <h2 className="font-diplayFair text-5xl font-bold text-black">
          Special Offers
          <p className="border inline-block border-[#6e3434] h-[1px] w-16 ml-4 items-end"></p>
        </h2>
        <p className="text-gray-800 font-lora mt-8 text-lg">
          Exciting news! Our tourist resort is proud to announce a new offer for
          our guests. Whether you're looking for a relaxing escape or an
          adventure-filled getaway, our resort has something for everyone. With
          breathtaking views, top-notch amenities, and a wide range of
          activities, you'll never run out of things to do.
        </p>
      </div>
      <div className="lg:flex mt-14 space-y-16 lg:space-y-0">
        <div>
          {/* Image Card-1 */}
          <div className="relative">
            <img src={img1} className="px-4 w-full" alt="" />
            <div className="sm:cardHover py-4 sm:py-0">
              <h2 className="headingM px-4 text-black sm:text-white ">
                Romantic Getaway Package
              </h2>
              <p className="paragraphD mt-5 px-4 text-black  sm:text-white">
                Luxury accommodations: A comfortable and well-appointed room or
                suite with romantic touches such as rose petals, champagne, and
                chocolates.Fine dining: A romantic dinner for two at a hotel
                restaurant or a private candlelit dinner on a terrace with
                views.
              </p>
            </div>
          </div>
          {/* Offer Button-1 */}
          <div className="flex justify-around items-center mt-8 p-4 bg-rose-200 mx-4">
            <h2 className="headingS text-xl text-black">
              15% Off on this packages
            </h2>
            <p className="Btn-Primary">Book Now</p>
          </div>
        </div>

        <div>
          {/* Image Card-2 */}
          <div className="relative">
            <img src={img2} className="px-4 w-full" alt="" />
            <div className="sm:cardHover py-4 sm:py-0">
              <h2 className="headingM px-4 text-black sm:text-white">
                Relaxation Package
              </h2>
              <p className="paragraphD mt-5 px-4 text-black sm:text-white">
                Relaxing activities: Access to a pool or hot tub, yoga or
                meditation classes, and guided walks in nature.Wellness classes:
                Cooking classes, healthy eating workshops, and fitness
                classes.Private downtime: Access to quiet or secluded areas of
                the resort, such as a private beach or garden.
              </p>
            </div>
          </div>
          {/* offer Button-2 */}
          <div className="flex justify-around items-center bg-rose-200 mt-8 p-4 mx-4">
            <h2 className="headingS text-xl text-black">
              21% Off on this packages
            </h2>
            <p className="Btn-Primary">Book Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner08;
