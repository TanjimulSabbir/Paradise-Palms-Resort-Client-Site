import React, { useEffect, useState } from "react";
import Blogs from "../../../JsonFiles/Blogs.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GetBlogs from "../../../Hooks/GetBlogs";
import PageLoading from "../../../Components/Shared/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const B09Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [BlogsData, isLoading, isError] = GetBlogs();

  if (isLoading) {
    return <PageLoading></PageLoading>;
  }
  if (isError) {
    return console.log(isError, "from Blogs");
  }

  function handleBlog(_id) {
    navigate(`/blog/${_id}`); // Navigate to a new page when the p tag is clicked
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${pathName === "/" ? "lg:grid-cols-3" : "lg:grid-cols-1"
        } gap-y-16 md:gap-8 lg:gap-10`}
    >
      {BlogsData?.map((blog) => {
        const { _id, title, description, img, date, author } = blog;
        return (
          <div onClick={() => handleBlog(_id)}
            key={_id}
            className="card relative pb-24 p-6 border cursor-pointer"
            id={`${title}`}>
            <figure className="rounded-none">
              <img
                src={img}
                className={`${pathName === "/" ? "h-[300px]" : "max-h-min"
                  } w-full`}
                alt="blog"
              />
            </figure>
            <div className="mt-6">
              <div className="flex justify-between">
                <span className="">{date} </span> <br />
                <Link
                  to={`/author`}
                  className="text-[12px] link link-success text-green-500">by {author}
                </Link>
              </div>
              <h2 className="card-title font-diplayFair mt-4">
                {title.slice(0, 30) + "..."}
              </h2>
              <div> <p className="font-openSans mt-10">{description.slice(0, 180)}<Link to={`/blog/$              {_id}`} className="text-rose-500">
                ...more
              </Link>
              </p>
              </div>
            </div>
          </div>
        );
      })}
      {pathName === "/" && (
        <Link to={"/blog"}>
          <button className="btn border-none rounded-none text-black bg-rose-300 mt-14">
            know More{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
            ></FontAwesomeIcon>
          </button>
        </Link>
      )}
    </div>
  );
};

export default B09Cards;
