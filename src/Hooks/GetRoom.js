import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import PageLoading from '../Components/Shared/Loading/Loading';

const GetRoom = () => {
    const location=useLocation();
    const pathName=location.pathname;

let {data:RoomsData=[],refetch,isLoading,isError}=useQuery({
    queryKey:['RoomsData'],
    queryFn: async()=>{
        const res= await fetch('http://localhost:5000/rooms')
        const data=await res.json()
        return data;
    }
})
if(pathName==='/'){
    RoomsData=RoomsData.slice(0,3)
    return [RoomsData,isLoading,isError]
}
    return [RoomsData,isLoading,isError]
};

export default GetRoom;