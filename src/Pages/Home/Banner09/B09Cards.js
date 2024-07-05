import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs";
import PageLoading from "../../../Components/Shared/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../../style/animation.css"

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
      className={`rightSlider grid grid-cols-1 md:grid-cols-2 ${pathName === "/" ? "lg:grid-cols-3" : "lg:grid-cols-1"
        } gap-y-16 md:gap-8 lg:gap-10`}
    >
      {BlogsData?.map((blog) => {
        const { _id, title, description, img, date, author } = blog;
        return (
          <div key={_id} className="downSlider relative pb-6 shadow-lg" id={`${title}`}>
            <img
              src={img}
              className={`rounded ${pathName === "/" ? "md:h-[300px]" : "max-h-min"} w-full`} alt="blog" />
            <div className="mt-6 p-4">
              <div className="flex justify-between">
                <span>{date} </span> <br />
                <Link to="/author" className="text-[12px] link text-green-600">
                  by {author}
                </Link>
              </div>

              <div onClick={() => handleBlog(_id)} className="cursor-pointer">
                <h2 className="font-diplayFair font-bold my-8 ">
                  {title}
                </h2>
                <div>
                  <p className="font-openSans text-justify mt-8">{description.slice(0, 130)}
                    <Link to="/blog" className="cursor-pointer text-emerald-500">...Read More</Link>
                  </p>

                </div>
              </div>
            </div>
          </div>
        );
      })}
      {pathName === "/" && (
        <Link to={"/blog"}>
          <button className="btn bg-[#B3F2DD] border-none rounded-none text-black bg-rose-300">
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
