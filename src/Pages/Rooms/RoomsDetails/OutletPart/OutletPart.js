import React from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import Review from "./OutletChild/Review";

const OutletPart = ({matchedRoom}) => {
  const {_id} = matchedRoom;
  const params = useParams();
  const location = useLocation();

  return (
    <div className="pt-20 pb-20 mid-lg:pb-0">
      <div className="flex font-openSans text-[11px] text-black mid-lg:text-[12px] border-b-2 pb-2 justify-around">
        <Link
          className="ClickedBtn p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/description`}
        >
          Description
        </Link>
        <Link
          className="ClickedBtn p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/addinformation`}
        >
          Additional Information
        </Link>
        <Link
          className={`ClickedBtn p-1 sm:p-2 uppercase ${
            params.info ? "" : "underline text-green-500"
          }`}
          to={`/rooms/${_id}/reviews`}
        >
          Reviews
        </Link>
        <Link
          className={`ClickedBtn p-1 sm:p-2 uppercase`}
          to={`/rooms/${_id}/price`}
        >
          Pricing Plans
        </Link>
      </div>
      <div className="pt-6">
        <Outlet></Outlet>
        {params.info ? "" : <Review></Review>}
      </div>
    </div>
  );
};

export default OutletPart;
