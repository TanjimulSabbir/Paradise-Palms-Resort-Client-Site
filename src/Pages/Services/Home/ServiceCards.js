import React from 'react'
import { Link } from 'react-router-dom';
import PageLoading from '../../../Components/Shared/Loading/Loading';
import GetServices from '../../../Hooks/GetServices';

const ServiceCards = () => {
    const [ServicesData, isLoading] = GetServices();
    if (isLoading) {
        return <PageLoading />
    }
    return (
        <div>{
            ServicesData?.map((feature, index) => {
                const { _id, title, description, img } = feature
                return (
                    <div className='my-20 bg-white'>
                        <div className={`sm:flex items-center pb-16 sm:py-6 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                            <div className="w-1/2">
                                <img src={img} className="p-4 shadow-lg" alt="" />
                            </div>
                            <div className='w-1/2 px-8'>
                                <h1 className="font-displayFair text-2xl mt-6 sm:mt-4">{title}</h1>
                                <h2 className='text-gray-300 mt-1 text-sm'>Opening a door to the future</h2>
                                <p className="mt-3 mb-8 mid-lg:block">{description.slice(0, 120)}</p>
                                <button className="Btn-Primary">Know More...</button>
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