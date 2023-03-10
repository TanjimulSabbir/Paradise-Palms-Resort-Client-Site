import React from "react";
import { useParams } from "react-router-dom";
import PageLoading from "../../../../../Components/Shared/Loading/Loading";
import useRoom from "../../../../../Hooks/useRoom";
import AdditionalInfo from "./AdditionalInfo";
import Description from "./Description";
import Pricing from "./Pricing";
import Review from "./Review";

const ChildHome = () => {
    const [RoomsData,isLoading] = useRoom();
    const params = useParams();
    if(isLoading){
      return <PageLoading/>
    }
    const matchedRoom = RoomsData.find((room) => room._id === params.id);

  return (
    <div>
        {params?.info==='description'&&<Description matchedRoom={matchedRoom}/>}
        {params?.info === "addinformation"&& <AdditionalInfo/>}
        {params?.info === "reviews" && <Review/>}
        {params?.info === "price"&&<Pricing/>}
    </div>
  );
};

export default ChildHome;
