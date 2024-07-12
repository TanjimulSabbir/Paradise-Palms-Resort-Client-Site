import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Review from "./OutletChild/Review";

const OutletPart = ({ matchedRoom }) => {
  const { _id } = matchedRoom;
  const params = useParams();

  return (
    <div>
      <div className="pt-16 flex items-center space-x-5 lg:space-x-10 text-[11px] text-black mid-lg:text-[12px] border-b-2 pb-2">
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/description`}
        >
          Description
        </NavLink>
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/addinformation`}
        >
          Additional Information
        </NavLink>
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/reviews`}
        >
          Reviews
        </NavLink>
        <NavLink
          className={`p-1 sm:p-2 uppercase`}
          to={`/rooms/${_id}/price`}
        >
          Pricing Plans
        </NavLink>
      </div>
      <div className="mt-14">
        <Outlet></Outlet>
        {params.info ? "" : <Review></Review>}
      </div>
    </div>
  );
};

export default OutletPart;
