import React from "react";
import {Link} from "react-router-dom";
import PageLoading from "../../../Components/Shared/Loading/Loading";
import GetServices from "../../../Hooks/GetServices";


const Banner04 = () => {
  const [ServicesData, isLoading, isError] = GetServices();
  
  if (isLoading) {
    return <PageLoading />;
  }
  if (isError) {
    return console.log(isError, "from Rooms Page");
  }
  
  return (
    <div className="py-24 UniversalPadding bg-gray-200 w-full min-h-screen bg-center object-cover bg-cover bg-no-repeat space-y-10 bg-fixed">
      <div className="flex justify-end bg-opacity-30">
        <div className="space-y-14 text-black">
          <h2 className="font-diplayFair text-5xl font-bold text-black">
            <span className="">Our</span>{" "}
            <span className="">Services & Features</span>
          </h2>
          <p className="mid-lg:w-2/3 font-openSans">
            Our resort's stunning architecture and expertly crafted interiors
            create a warm and welcoming atmosphere that guests are sure to love.
            Whether enjoying a delicious meal in the hotel's restaurant,
            unwinding by the pool, or exploring the nearby area, guests will
            find plenty of opportunities to create unforgettable memories.
            Whether looking for a romantic getaway or a family vacation, Our
            resort offers the perfect setting for making lasting memories. So
            why wait? Book your stay today and discover the ultimate in luxury
            and comfort!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-14 relative">
        {ServicesData?.map((feature) => {
          const {_id, title, description, img} = feature;
          return (
            <div className="card card-compact shadow-xl w-full">
            <figure><img src={img} alt="services" className="h-[500px] md:h-[320px] w-full p-4" /></figure>
            <div className="card-body">
              <h2 className="text-lg md:text-3xl font-diplayFair mb-5">{title}</h2>
              <p className="font-openSans">{description.slice(0,200)} <Link to={`/services/${_id}`} className='text-green-600'>...See more</Link></p>
              <div className="pb-5">
                <Link to={`services/${_id}`} className="btn bg-green-500 text-black border-none w-full mt-14">Know more...</Link>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner04;
