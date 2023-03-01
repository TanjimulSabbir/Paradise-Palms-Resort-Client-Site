import React from "react";
import {Link, useParams} from "react-router-dom";
import PageLoading from "../../Components/Shared/Loading/Loading";
import GetBlogs from "../../Hooks/GetBlogs";
import ExtraDetailsText from "./ExtraDetailsText";

const BlogsDetails = () => {
  const params = useParams();
  const [BlogsData, isLoading, isError] = GetBlogs();
  if (isLoading) {
    return <PageLoading />;
  }
  if (isError) {
    return console.log(isError, "from BlogsDetails");
  }
  const matchedBlog = BlogsData.find((blog) => blog._id === params.id);
  const {title, img, description, author, date} = matchedBlog;
  return (
    <div className="py-24 UniversalPadding">
      <div className="card mx-auto lg:card-side shadow-xl UniversalPadding">
     
      <h2 className="card-title headingS md:headingM lg:headingL text-black">{title}</h2>
      <Link to='/autor' className="mt-6 flex space-x-2"><p className="link link-success">{author}</p>
      <p>|| {date}</p></Link>
     
        <figure className="mt-8">
          <img
            src={img}
            alt="BlogsDetails"
            className="w-4/5 mx-auto rounded"
          />
        </figure>
        <div className="mt-14">
        <p className="font-openSans">{description}</p>
        <ExtraDetailsText/>
       <p className="pb-10"> <Link to={`/services`} className="link text-green-500 pt-5">Know more about our services</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
