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
  const [RoomsData, isLoading] = useRoom();

  if (isLoading) {
    return <PageLoading></PageLoading>;
  }
  const matchedRoom = RoomsData?.find((room) => room._id === params.id);

  return (
    <div>
      <img src={img1} alt="" />
      <div className="py-24">
        <RoomImage matchedRoom={matchedRoom && matchedRoom}></RoomImage>
        <BookingForm matchedRoom={matchedRoom && matchedRoom}></BookingForm>
        <RoomFacilitie />
        <RoomOverView />
      </div>
    </div>
  );
};

export default RoomDetailsHome;
