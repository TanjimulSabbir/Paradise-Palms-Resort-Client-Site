import React from "react";

const Description = ({ matchedRoom }) => {
  const { title, amenities, description } = matchedRoom;

  const list = amenities.map((item) => (
    <li className="text-black">{item}</li>
  ));
  return (
    <div>
      <p className="text-2xl sm:text-3xl mid-lg:text-5xl">{title}</p>
      <p className=" text-black py-8">{description}</p>
      {list}
    </div>
  );
};

export default Description;
