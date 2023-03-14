import React from "react";
import Breadcumb from "../../../Components/Shared/Breadcumb";
import B10Cards from "../../Home/Banner10/B10Cards";
import Service from "./Service";

const Banner01 = () => {
  return (
    <div className="bg-gray-200">
      <div className="py-24 space-y-14">
        <Service />

        <div className="UniversalPadding">
          <h2 className="font-diplayFair text-3xl md:text-4xl font-bold">
            What we offer to our customer
            <span className="BorderBtm"></span>
          </h2>
          <p className="text-b3T-color mt-8 mb-14">
            Our restaurant offers a variety of delicious, locally-sourced cuisine,
            served in a warm and inviting atmosphere. Whether you're looking to
            relax after a day of exploring, or celebrate a special occasion, our
            restaurant is the perfect place to dine.
          </p>
          <B10Cards />
        </div>
      </div>
      <Breadcumb></Breadcumb>
    </div>
  );
};

export default Banner01;
