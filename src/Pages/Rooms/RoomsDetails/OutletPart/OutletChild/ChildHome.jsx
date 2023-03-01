import React from "react";
import { useParams } from "react-router-dom";
import PageLoading from "../../../../../Components/Shared/Loading/Loading";
import GetRoom from "../../../../../Hooks/GetRoom";
import AdditionalInfo from "./AdditionalInfo";
import Description from "./Description";
import Pricing from "./Pricing";
import Review from "./Review";

const ChildHome = () => {
    const [RoomsData,isLoading] = GetRoom();
    const params = useParams();
    if(isLoading){
      return <PageLoading/>
    }
    const matchedRoom = RoomsData.find((room) => room._id === params.id);

  return (
    <div children="min-h-screen w-full mid-lg:text-lg">
      <div className="p-10">
        {params?.info==='description'&&<Description matchedRoom={matchedRoom}/>}
        {params?.info === "addinformation"&& <AdditionalInfo/>}
        {params?.info === "reviews" && <Review/>}
        {params?.info === "price"&&<Pricing/>}
      </div>
    </div>
  );
};

export default ChildHome;
