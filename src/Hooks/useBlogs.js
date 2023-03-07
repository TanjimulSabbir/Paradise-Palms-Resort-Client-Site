import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const useBlogs = () => {
    const location = useLocation();
    const pathName = location.pathname;

    let { data: BlogsData = [], isLoading, isError } = useQuery({
        queryKey: ['BlogsData'],
        queryFn: async () => {
            const res = await fetch('https://tourist-booking-server.vercel.app/blogs')
            const data = res.json();
            return data;
        }
    })
    if (pathName === '/') {
        BlogsData = BlogsData.slice(3, 6)
        return [BlogsData, isLoading, isError]
    }
    return [BlogsData, isLoading, isError]
};

export default useBlogs;