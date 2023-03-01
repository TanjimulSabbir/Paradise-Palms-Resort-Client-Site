import React from 'react';
import { useQuery } from 'react-query';

const GetOffers = () => {
    let {data:OffersData=[],isError,isLoading,refetch}=useQuery({
        queryKey:['Offers'],
        queryFn: async()=>{
            const res=await fetch('http://localhost:5000/offers')
            const data=res.json();
            return data;
        }
    })
    return [OffersData,isLoading,isError]
};

export default GetOffers;