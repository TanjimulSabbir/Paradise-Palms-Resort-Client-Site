import React from "react";

const RoomFacilities = () => {
  const facilites = [
    {title: "TV Led", img: "/Rooms/Facilities/tv.jpg"},
    {title: "Breakfast", img: "/Rooms/Facilities/breakfast.jpg"},
    {title: "Free Parking", img: "/Rooms/Facilities/parking.jpg"},
    {title: "AC Rooms", img: "/Rooms/Facilities/AcRoom.jpg"},
    {title: "Library", img: "/Rooms/Facilities/library.jpg"},
    {title: "Garden View", img: "/Rooms/Facilities/garden.jpg"},
  ];
  return (
    <div className="p-10">
      <h2 className="headingM text-black font-bold">Room Facilities</h2>
      <div className="grid grid-cols-3 gap-4 pt-10">
        {facilites.map((facility) => {
          return (
            <div className="card shadow-xl">
              <figure>
                <img src={facility.img} alt="" />
              </figure>
              <div className="py-4 mx-auto">
                <h2 className="card-title">{facility.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomFacilities;
