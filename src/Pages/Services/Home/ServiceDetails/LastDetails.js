import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcumb from '../../../../Components/Shared/Breadcumb';
import PageLoading from '../../../../Components/Shared/Loading/Loading';
import UseServicesDetails from '../../../../Hooks/UseServicesDetails';

const LastDetails = () => {
    const location = useLocation();
    const link = location.pathname.split('/')[2];
    const id = location.pathname.split('/')[3];

    const [serviceDetailsData, isLoading] = UseServicesDetails(link);

    const MatchedData = serviceDetailsData?.find(service => service._id === id);
    const { _id, img, title, description } = MatchedData;

    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div>
            <div className='UniversalPadding pb-16 mx-auto'>
                <div>
                    <img src={img} alt={title} className="w-full" />
                </div>
                <div className='mt-10 space-y-14'>
                    <h1 className='font-diplayFair text-2xl mid-lg:text-4xl'>{title}</h1>
                    <p className='font-openSans'>{description}
                        <span>Our resort's stunning architecture and expertly crafted interiors create a warm and welcoming atmosphere that guests are sure to love. Whether enjoying a delicious meal in the hotel's restaurant, unwinding by the pool, or exploring the nearby area, guests will find plenty of opportunities to create unforgettable memories. Whether looking for a romantic getaway or a family vacation, Our resort offers the perfect setting for making lasting memories. So why wait? Book your stay today and discover the ultimate in luxury and comfort!
                        </span>
                        <span>   Experience the ultimate in luxury and relaxation at our resort, where we offer an array of services designed to make your stay unforgettable. Our team of professionals is dedicated to providing you with the highest level of service, and our facilities are second to none. From our indulgent spa treatments to our state-of-the-art fitness center, we have everything you need to unwind and recharge. Enjoy a round of golf on our championship course, take a dip in our sparkling pool, or simply relax in your beautifully appointed room. Whatever your preference, we have a service to suit your every need.</span>
                    </p>
                    <p>
                        <span>Our resort's stunning architecture and expertly crafted interiors create a warm and welcoming atmosphere that guests are sure to love. Whether enjoying a delicious meal in the hotel's restaurant, unwinding by the pool, or exploring the nearby area, guests will find plenty of opportunities to create unforgettable memories. Whether looking for a romantic getaway or a family vacation, Our resort offers the perfect setting for making lasting memories. So why wait? Book your stay today and discover the ultimate in luxury and comfort!
                        </span>
                        <br></br>
                        <span>    If you're looking for a place to unwind and recharge, look no further than our spa services. Our spa features a wide range of treatments and therapies designed to help you relax, rejuvenate, and revitalize your body and mind. From massages to facials to body treatments, we have something for everyone. Read on to learn more about our spa services and how they can help you feel your best. At our resort, we believe that dining is more than just about the food, it's about the whole experience. That's why we offer a variety of dining options that cater to every taste and occasion. Whether you're in the mood for a romantic dinner for two, a family gathering, or a casual bite, we have something to suit your needs. In this blog post, we'll give you a sneak peek at what's on the menu at our dining venues. Find out why our resort is the ultimate destination for luxury travelers and discover our world-class accommodations. From spacious suites to stunning private villas, our resort offers a wide range of options for the most discerning guests.</span>
                    </p>
                </div>

            </div>
            <Breadcumb></Breadcumb>
        </div>
    );
};

export default LastDetails;