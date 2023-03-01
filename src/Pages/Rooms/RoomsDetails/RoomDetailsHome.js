import React from "react";
import img1 from "../images/heading.jpg";
import RoomImage from "./Part01/RoomImage";
import BookingForm from "./Part01/BookingForm";
import RoomFacilitie from "./Part02/RoomFacilities";
import RoomOverView from "./Part02/RoomOverView";
import { useParams } from "react-router-dom";
import GetRoom from "../../../Hooks/GetRoom";
import PageLoading from "../../../Components/Shared/Loading/Loading";


const RoomDetailsHome = () => {
  const params = useParams();
  const [RoomsData, isError, isLoading] = GetRoom();

  if (isLoading) {
    return <PageLoading></PageLoading>;
  }
  if (isError) {
    return console.log(isError);
  }
  console.log(RoomsData, params);
  const matchedRoom = RoomsData?.find((room) => room._id === params.id);
  console.log(matchedRoom, "RoomDetailsHome");

  let width = window.innerWidth;
  let height = window.innerHeight;

  return (
    <div className="">
      <h1 className="font-bold text-3xl">{width}</h1>
      <div className="relative bg-black">
        <img src={img1} alt="" className="" />
      </div>
      <div className="UniversalPadding">
        {/* Part01*/}
        <div className="mid-lg:flex py-14">
          <RoomImage matchedRoom={matchedRoom && matchedRoom}></RoomImage>
          <BookingForm matchedRoom={matchedRoom && matchedRoom}></BookingForm>
        </div>
      </div>
      {/* Part02 */}
      <div>
        <div className="UniversalPadding">
          <div className="mx-auto">
            <RoomFacilitie />
          </div>
          <div className="mx-auto">
            <RoomOverView />
          </div>
        </div>
      </div>
      <PageLoading />
    </div>
  );
};

export default RoomDetailsHome;
