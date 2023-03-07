import React from "react";
import OutletPart from "../OutletPart/OutletPart";

const RoomImage = ({ matchedRoom }) => {
  const { title, img } = matchedRoom;

  return (
    <div className="w-full">
      <div>
        <h2 className="headingM text-black bg-emerald-100 p-3">{title}</h2>
        <div>
          <img src={img} className="w-full mt-4 mid-lg:px-3 lg:px-0 rounded" alt="" />
        </div>
      </div>
      <OutletPart matchedRoom={matchedRoom && matchedRoom}></OutletPart>
    </div>
  );
};

export default RoomImage;
