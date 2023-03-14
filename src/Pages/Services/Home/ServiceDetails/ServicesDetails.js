import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcumb from '../../../../Components/Shared/Breadcumb';
import PageLoading from '../../../../Components/Shared/Loading/Loading';
import UseServicesDetails from '../../../../Hooks/UseServicesDetails';
import useTitle from '../../../../Hooks/useTitle';

const ServicesDetails = () => {
    useTitle('ServicesDetails');
    const params = useParams();
    const link = params.id;
    const [ServicesDetailsData, isLoading] = UseServicesDetails(link);

    if (isLoading) {
        return <PageLoading></PageLoading>
    }


    return (
        <div className='bg-gray-200'>
            <div className='UniversalPadding py-24'>
                <div className="pb-14">
                    <h2 className="font-diplayFair text-3xl font-bold mid-lg:w-2/3 leading-snug">
                        Enjoy the Outdoors with Our Resort Amenities, Including Pools, Golf Courses, and More
                        <span className="BorderBtm"></span>
                    </h2>
                    <p className="text-b3T-color mt-14">
                        Experience the ultimate in luxury and relaxation at our resort, where we offer an array of services designed to make your stay unforgettable. Our team of professionals is dedicated to providing you with the highest level of service, and our facilities are second to none. From our indulgent spa treatments to our state-of-the-art fitness center, we have everything you need to unwind and recharge. Enjoy a round of golf on our championship course, take a dip in our sparkling pool, or simply relax in your beautifully appointed room. Whatever your preference, we have a service to suit your every need.
                    </p>
                </div>

                {ServicesDetailsData?.map((feature, index) => {
                    const { _id, title, description, img } = feature
                    return (
                        <div className='my-20 bg-base-100'>
                            <div className={`md:flex md:items-center pb-16 md:py-6 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                <div className="w-full md:w-1/2">
                                    <img src={img} className="w-full p-4 max-h-[400px]" alt="" />
                                </div>
                                <div className='w-full md:w-1/2 px-8'>
                                    <h1 className="font-displayFair text-3xl mt-6 md:mt-4">{title}</h1>
                                    <h2 className='text-gray-300 mt-1 text-sm'>Opening a door to the future</h2>
                                    <p className="font-openSans mt-4 mb-16 mid-lg:block">{description.slice(0, 120)}</p>
                                    <Link to={`${link === 'rooms' ? "/rooms/" :
                                        `/services/${link}/`}${_id}`} className="Btn-Primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <Breadcumb></Breadcumb>
        </div>
    );
};

export default ServicesDetails;