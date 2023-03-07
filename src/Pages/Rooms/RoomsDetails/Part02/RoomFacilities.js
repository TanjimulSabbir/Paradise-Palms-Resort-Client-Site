import React from "react";

const RoomFacilities = () => {
  const facilites = [
    { title: "TV Led", img: "https://i.ibb.co/sKMHKGq/photo-1552975084-6e027cd345c2-ixlib-rb-4-0.jpg" },
    { title: "Garden View", img: "https://images.unsplash.com/photo-1626965654957-fef1cb80d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVuJTIwaG91c2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { title: "Free Parking", img: "https://i.ibb.co/CJY2NMY/photo-1503736334956-4c8f8e92946d-ixlib-rb-4-0.jpg" },
    { title: "AC Rooms", img: "https://i.ibb.co/wRzb9FR/photo-1461988625982-7e46a099bf4f-ixlib-rb-4-0.jpg" },
    { title: "Library", img: "https://i.ibb.co/RPB9t1W/photo-1531259736756-6caccf485f81-ixlib-rb-4-0.jpg" },
    { title: "Breakfast", img: "https://i.ibb.co/K9CLwp4/photo-1611601184963-9d1de9b79ff3-ixlib-rb-4-0.jpg" },
  ];
  return (
    <div className="UniversalPadding mt-14">
      <h2 className="headingM text-black font-bold">Room Facilities</h2>
      <div className="grid grid-cols-3 gap-4 pt-10">
        {facilites.map((facility) => {
          return (
            <div className="">
              <div className="bg-black">  <img src={facility.img} alt=""
                className="transition duration-500 hover:opacity-70" /></div>
              <div className="ml-2 py-2 mx-auto">
                <h2 className="">{facility.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomFacilities;
