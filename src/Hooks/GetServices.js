import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const GetServices = () => {
    const location=useLocation();
    const pathName=location.pathname;

let {data:ServicesData=[],isError,isLoading,refetch}=useQuery({
    queryKey:['Services'],
    queryFn: async()=>{
        const res=await fetch('http://localhost:5000/services')
        const data=res.json();
        return data;
    }
})
if(pathName==='/'){
    ServicesData=ServicesData.slice(3,6)
    return [ServicesData,isLoading,isError]
}
    return [ServicesData,isError,isLoading]
};

export default GetServices;