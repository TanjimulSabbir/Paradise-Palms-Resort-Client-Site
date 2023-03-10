import React from "react";

const Description = ({ matchedRoom }) => {
  const { title, amenities, description } = matchedRoom;

  const list = amenities.map((item) => (
    <li className="text-black font-openSans">{item}</li>
  ));
  return (
    <div>
      <p className="font-dislplayFair text-2xl mt-6 md:text-3xl">{title}</p>
      <p className="font-openSans text-black py-8">{description}
        <span>Escape to our luxurious spa and wellness center and indulge in a world of relaxation and rejuvenation. From massages to facials, our expert therapists will pamper you from head to toe and help you feel refreshed and rejuvenated.Book your stay for 3 nights and get a complimentary massage at our spa.Our resort is located in a peaceful and tranquil setting surrounded by stunning natural beauty.</span>
      </p>

      {list}
    </div>
  );
};

export default Description;
