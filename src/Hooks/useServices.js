import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const useServices = () => {
    const location = useLocation();
    const pathName = location.pathname;

    let { data: ServicesData = [], isError, isLoading, refetch } = useQuery({
        queryKey: ['Services'],
        queryFn: async () => {
            const res = await fetch('https://tourist-booking-server.vercel.app/services')
            const data = res.json();
            return data;
        }
    })
    refetch()
    if (pathName === '/') {
        ServicesData = ServicesData.slice(0, 3)
        return [ServicesData, isLoading, isError]
    }
    return [ServicesData, isError, isLoading]
};

export default useServices;