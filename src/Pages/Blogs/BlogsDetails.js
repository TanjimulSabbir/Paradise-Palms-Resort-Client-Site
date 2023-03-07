import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcumb from "../../Components/Shared/Breadcumb";
import PageLoading from "../../Components/Shared/Loading/Loading";
import useBlogs from "../../Hooks/useBlogs";
import ExtraDetailsText from "./ExtraDetailsText";

const BlogsDetails = () => {
  const params = useParams();
  const [BlogsData, isLoading] = useBlogs();
  if (isLoading) {
    return <PageLoading />;
  }

  const matchedBlog = BlogsData.find((blog) => blog._id === params.id);
  const { title, img, description, author, date } = matchedBlog;
  return (
    <div className="pb-24 pt-14 UniversalPadding">
      <div className="mx-auto UniversalPadding">
        <h1 className='font-diplayFair text-2xl mid-lg:text-4xl'>{title}</h1>

        <Link to='/author' className="my-6 flex space-x-2">
          <p className="link link-success">{author}</p>
          <p> || {date}</p>
        </Link>

        <img src={img} alt="Blog" className="mx-auto rounded" />

        <div className="mt-14">
          <p className="font-openSans">{description}</p>
          <ExtraDetailsText />
          <p className="py-10">
            <Link to="/services" className="link text-green-500">Know more about our services</Link>
          </p>
        </div>
      </div>
      <Breadcumb />
    </div>
  );
};

export default BlogsDetails;
