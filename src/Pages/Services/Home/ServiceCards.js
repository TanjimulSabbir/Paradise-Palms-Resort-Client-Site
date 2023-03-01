import React from 'react'
import { Link } from 'react-router-dom';
import PageLoading from '../../../Components/Shared/Loading/Loading';
import useServices from '../../../Hooks/useServices';

const ServiceCards = () => {
    const [ServicesData, isLoading] = useServices();
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <div>{
            ServicesData?.map((feature, index) => {
                const { _id, title, description, img, link } = feature
                return (
                    <div className='my-20 bg-base-100'>
                        <div className={`sm:flex sm:items-center pb-16 sm:py-6 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                            <div className="w-full sm:w-1/2">
                                <img src={img} className="w-full p-4" alt="" />
                            </div>
                            <div className='w-full sm:w-1/2 px-8'>
                                <h1 className="font-displayFair text-2xl mt-6 sm:mt-4">{title}</h1>
                                <h2 className='text-gray-300 mt-1 text-sm'>Opening a door to the future</h2>
                                <p className="mt-4 mb-8 mid-lg:block">{description.slice(0, 120)}</p>
                                <Link to={`/services/${link}`} className="Btn-Primary">Know More...</Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default ServiceCards