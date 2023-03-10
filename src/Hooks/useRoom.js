import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const useRoom = () => {
    const location = useLocation();
    const pathName = location.pathname;

    let { data: RoomsData = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['RoomsData'],
        queryFn: async () => {
            const res = await fetch('https://tourist-booking-server.vercel.app/rooms')
            const data = await res.json()
            return data;
        }
    })
    refetch()
    if (pathName === '/') {
        RoomsData = RoomsData.slice(9, RoomsData?.length)
        return [RoomsData, isLoading, isError]
    }
    return [RoomsData, isLoading, isError]
};

export default useRoom;