import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

const GetBlogs = () => {
const location=useLocation();
const pathName=location.pathname;

let {data:BlogsData=[],isLoading,isError}=useQuery({
    queryKey:['BlogsData'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/blogs')
        const data=res.json();
        return data;
    }
})
    if(pathName==='/'){
        BlogsData=BlogsData.slice(0,3)
        return [BlogsData,isLoading,isError]
    }
    return [BlogsData,isLoading,isError]
};

export default GetBlogs;