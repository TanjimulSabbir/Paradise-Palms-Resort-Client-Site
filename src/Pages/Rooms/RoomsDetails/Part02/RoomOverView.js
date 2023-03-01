import React from "react";

const RoomOverView = () => {
  const overView = [
    {
      Occupancy: "Max three Persons",
    },
    {Size: "800 sq. feet"},
    {View: "Sea or Garden view"},
    {"Room Service": "Available per request"},
    {Terraces: "Balcony"},
    {"Free Pickup Facility": "Yes"},
    {"Internet Free": "Yes"},
    {Gym: "Yes"},
  ];

  return (
    <div className="p-10">
      <h1 className="font-diplayFair text-3xl font-bold">Room OverView</h1>
      <div className="overflow-x-auto pt-10">
        <table className="table w-full border">
          {overView.map((item, index) => {
            const key = Object.keys(item)[0];
            const value = item[key];
            return (
              <tbody>
                <tr className="border border-gray-300">
                  <th className="font-diplayFair hover:bg-gray-300 border-r border-r-gray-300 duration-300">
                    {key}
                  </th>
                  <td
                    className={`font-openSans hover:bg-gray-300 duration-300`}
                  >
                    {value}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default RoomOverView;
