import React from "react";
import OutletPart from "../OutletPart/OutletPart";

const RoomImage = ({matchedRoom}) => {
const {title,img,description}=matchedRoom;

  return (
    <div className="w-full px-5 mid-lg:w-2/3">
        <div className="">
          <h2 className="headingL text-black">{title}</h2>
          <div>
            <img src={img} className="w-full mt-10 mid-lg:px-3 lg:px-0 rounded" alt="" />
          </div>
        </div>
       <OutletPart matchedRoom={matchedRoom&&matchedRoom}></OutletPart>
    </div>
  );
};

export default RoomImage;
