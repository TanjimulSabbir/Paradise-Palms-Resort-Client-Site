import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs";
import PageLoading from "../../../Components/Shared/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const B09Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [BlogsData, isLoading] = useBlogs();

  if (isLoading) {
    return <PageLoading></PageLoading>;
  }

  function handleBlog(_id) {
    navigate(`/blog/${_id}`)
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${pathName === "/" ? "lg:grid-cols-3" : "lg:grid-cols-1"
        } gap-y-16 md:gap-8 lg:gap-10`}
    >
      {BlogsData?.map((blog) => {
        const { _id, title, description, img, date, author } = blog;
        return (
          <div key={_id} className="relative pb-6 p-2 border rounded" id={`${title}`}>
            <img
              src={img}
              className={`${pathName === "/" ? "h-[300px]" : "max-h-min"} w-full`} alt="blog" />
            <div className="mt-6 p-4">
              <div className="flex justify-between">
                <span>{date} </span> <br />
                <Link to="/author" className="text-[12px] link text-green-600">
                  by {author}
                </Link>
              </div>

              <div onClick={() => handleBlog(_id)} className="cursor-pointer">
                <h2 className="card-title font-diplayFair mt-6">
                  {title.slice(0, 35) + "..."}
                </h2>
                <div>
                  <p className="font-openSans text-justify mt-8">{description.slice(0, 130)}
                    <p onClick={() => handleBlog(_id)} className="text-rose-500 cursor-pointer">read more...</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {pathName === "/" && (
        <Link to={"/blog"}>
          <button className="btn border-none rounded-none text-black bg-rose-300">
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
