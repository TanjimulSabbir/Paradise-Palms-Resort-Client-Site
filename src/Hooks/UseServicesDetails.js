import { useQuery } from 'react-query';

const UseServicesDetails = (link) => {

    let { data: ServicesDetailsData = [], isError, isLoading, refetch } = useQuery({
        queryKey: ['ServicesDetailsData'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/${link}`)
            const data = res.json();
            return data;
        }
    })
    return [ServicesDetailsData, isError, isLoading]
};

export default UseServicesDetails;