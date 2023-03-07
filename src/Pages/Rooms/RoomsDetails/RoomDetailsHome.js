import React from "react";
import img1 from "../images/heading.jpg";
import RoomImage from "./Part01/RoomImage";
import BookingForm from "./Part01/BookingForm";
import RoomFacilitie from "./Part02/RoomFacilities";
import RoomOverView from "./Part02/RoomOverView";
import { useParams } from "react-router-dom";
import useRoom from "../../../Hooks/useRoom";
import PageLoading from "../../../Components/Shared/Loading/Loading";


const RoomDetailsHome = () => {
  const params = useParams();
  const [RoomsData, isError, isLoading] = useRoom();

  if (isLoading) {
    return <PageLoading></PageLoading>;
  }
  if (isError) {
    return console.log(isError);
  }
  console.log(RoomsData, params);
  const matchedRoom = RoomsData?.find((room) => room._id === params.id);
  console.log(matchedRoom, "RoomDetailsHome");

  return (
    <div>
      <div>
        <img src={img1} alt="" className="" />
      </div>

      <div className="UniversalPadding py-16">
        <RoomImage matchedRoom={matchedRoom && matchedRoom}></RoomImage>
        <BookingForm matchedRoom={matchedRoom && matchedRoom}></BookingForm>
      </div>


      <div>
        <div>
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
