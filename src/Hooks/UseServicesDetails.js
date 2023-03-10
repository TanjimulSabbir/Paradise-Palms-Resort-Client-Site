import { useQuery } from 'react-query';

const UseServicesDetails = (link) => {

    let { data: ServicesDetailsData = [], isError, isLoading, refetch } = useQuery({
        queryKey: ['ServicesDetailsData'],
        queryFn: async () => {
            const res = await fetch(`https://tourist-booking-server.vercel.app/${link}`)
            const data = res.json();
            return data;
        }
    })
    return [ServicesDetailsData, isError, isLoading]
};

export default UseServicesDetails;