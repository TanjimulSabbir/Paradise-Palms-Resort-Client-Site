import { useQuery } from 'react-query';

const useGallery = () => {
    const { data: Gallary = [], isLoading, isError } = useQuery({
        queryKey: ['Gallery'],
        queryFn: async () => {
            const res = await fetch('https://tourist-booking-server.vercel.app/gallery')
            const data = res.json();
            return data;
        }
    })
    return [Gallary, isLoading, isError];
}

export default useGallery