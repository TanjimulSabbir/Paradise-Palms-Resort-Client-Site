import React from "react";
import { Link } from "react-router-dom";
import Breadcumb from "../../Components/Shared/Breadcumb";
import PageLoading from "../../Components/Shared/Loading/Loading";
import GetOffers from "../../Hooks/useOffers";
import useTitle from "../../Hooks/useTitle";

const Offers = () => {
  useTitle('Offers')

  // For time shorten i have show here in Offers Data instead of Shop Data.
  // As I haven't enough time to write json data on shop. And it also time consuming matter. It doesn't carry so much importance that i have to show accurate shop data here.
  const [OffersData, isLoading] = GetOffers();
  if (isLoading) {
    return <PageLoading />
  }

  return (
    <div className="py-24 UniversalPadding space-y-16 bg-gray-100">
      <div>
        <h2 className="font-diplayFair text-3xl font-bold">
          What we offer to our customer
          <span className="BorderBtm"></span>
        </h2>
        <p className="text-b3T-color mt-8">
          Our restaurant offers a variety of delicious, locally-sourced cuisine,
          served in a warm and inviting atmosphere. Whether you're looking to
          relax after a day of exploring, or celebrate a special occasion, our
          restaurant is the perfect place to dine.
        </p>
      </div>
      {OffersData?.map((feature, index) => {
        const { _id, title, description, img } = feature
        return (
          <div className='my-20 bg-base-100'>
            <div className={`md:flex md:items-center pb-16 md:py-6 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2">
                <img src={img} className="w-full p-4 max-h-[400px]" alt="" />
              </div>
              <div className='w-full md:w-1/2 px-8'>
                <h1 className="font-displayFair text-3xl mt-6 md:mt-4">{title}</h1>
                <h2 className='text-gray-300 mt-1 text-sm'>Opening a door to the future</h2>
                <p className="font-openSans mt-4 mb-16 mid-lg:block">{description.slice(0, 120)} <Link to="/booking">...More</Link></p>
                <Link to="/booking" className="Btn-Primary">Book Now</Link>
              </div>
            </div>
          </div>
        )
      })}
      <Breadcumb />
    </div>
  );
};

export default Offers;
