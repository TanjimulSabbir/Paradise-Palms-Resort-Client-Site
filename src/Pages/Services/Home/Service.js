import React from 'react';
import { Link } from 'react-router-dom';
import PageLoading from '../../../Components/Shared/Loading/Loading';
import GetServices from '../../../Hooks/GetServices';

const Service = () => {
    const [ServicesData,isLoading]=GetServices();
    if(isLoading){
        return <PageLoading/>
    }
    return (
        <div className='UniversalPadding space-y-14'>
            <div className="space-y-14 text-black">
          <h2 className="font-diplayFair text-5xl font-bold text-black">
            <span className="">Our</span>{" "}
            <span className="">Services and Features</span>
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
           {
            ServicesData.map(service=>{
                return  <div className="hero border p-4 bg-gray-200">
                <div className="hero-content flex-col mid-lg:flex-row">
                  <img src={service.img} alt='' className="max-w-sm sm:max-w-lg mid-lg:max-w-sm lg:max-w-xl rounded-lg shadow-2xl" />
                  <div className='ml-10 space-y-6 mt-6'>  
                    <h1 className="text-4xl font-bold font-diplayFair">{service.title}</h1>
                    <p className="py-6 font-openSans">{service.description}</p>
                    <Link to={`/services/${service._id}`}><button className="btn bg-green-500 border-none w-full">Know More</button></Link>
                  </div>
                </div>
              </div>
            })
           }
        </div>
    );
};

export default Service;