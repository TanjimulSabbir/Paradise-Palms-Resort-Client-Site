import React from "react";

const Description = ({matchedRoom}) => {
  const {title, amenities, description} = matchedRoom;

  const list = amenities.map((item) => (
    <li className="text-green-700">{item}</li>
  ));
  return (
    <div className="">
      <p className="text-4xl font-bold font-displayFair">{title}</p>
      <p className=" text-black py-8">{description}</p>
      {list}
    </div>
  );
};

export default Description;
