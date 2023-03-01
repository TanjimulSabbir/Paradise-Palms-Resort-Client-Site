import React from "react";
import B10Cards from "../../Home/Banner10/B10Cards";
import Service from "./Service";

const Banner01 = () => {
  return (
    <div className="py-24 space-y-14 bg-gray-200">
      <div>
        <Service />
      </div>
      <div className="py-24">
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
    </div>
  );
};

export default Banner01;
