import React from "react";
import PageLoading from "../../Components/Shared/Loading/Loading";
import GetOffers from "../../Hooks/GetOffers";
import useTitle from "../../Hooks/useTitle";

const Offers = () => {
  useTitle('Offers')

  // For time shorten i have show here in Offers Data instead of Shop Data.
  // A s i haven't enough time to write json data on shop. And it also time consuming matter.it doesn't carry so much importance that i have to show accurate shop data here.
  const [OffersData, isLoading, isError] = GetOffers();
  if (isLoading) {
    return <PageLoading />;
  }
  if (isError) {
    return console.log(isError);
  }

  return (
    <div className="py-24 UniversalPadding space-y-16">
      <div className="UniversalPadding">
        <h2 className="font-diplayFair text-3xl font-bold">
          What we offer to our customer
          <span className="BorderBtm"></span>
        </h2>
        <p className="text-b3T-color mt-8 mid-lg:w-1/2">
          Our restaurant offers a variety of delicious, locally-sourced cuisine,
          served in a warm and inviting atmosphere. Whether you're looking to
          relax after a day of exploring, or celebrate a special occasion, our
          restaurant is the perfect place to dine.
        </p>
      </div>
      {OffersData.map((offers) => {
        const { title, img, description, valid_from, valid_to } = offers;

        return (
          <div className="hero flex justify-center mid-lg:justify-start shadow-xl">
            <div
              className="hero-content flex-col space-y-6 
        mid-lg:space-y-0 mid-lg:space-x-6 mid-lg:flex-row"
            >
              <img
                src={img}
                className="max-w-sm md:max-w-md mid-lg:max-w-sm rounded-lg shadow-2xl mx-auto"
                alt=""
              />

              <div className="space-y-5 text-start">
                <h1 className="text-5xl font-bold text-black">{title}</h1>
                <div>
                  <p className="text-rose-500">Valid From: {valid_from}</p>
                  <p className="text-black">Valid to: {valid_to}</p>
                </div>
                <button className="btn btn-primary mt-6">Book Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
