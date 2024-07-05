import React, { useState } from "react";
import PageLoading from "../../Components/Shared/Loading/Loading";
import useBlogs from "../../Hooks/useBlogs";
import "../../style/animation.css"

const BlogsSidebar = () => {
  // Using destructuring to get BlogsData and isLoading from the useBlogs hook
  const [BlogsData, isLoading] = useBlogs();

  const [filteredBlogs, setFilteredBlogs] = useState(BlogsData || []);

  const handleSearch = (event) => {
    const inputData = event.target.value.toLowerCase();
    const filtered = BlogsData.filter(blog => blog.title.toLowerCase().includes(inputData));
    setFilteredBlogs(filtered);
  }

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="leftSlider pt-8 p-4 text-white">
      <div className="form-control">
        <div className="rightSlider input-group">
          <input
            type="text"
            placeholder="Search Categories"
            className="input input-bordered text-black"
            onChange={handleSearch}
          />
          <button className="btn bg-[#0ce49c] btn-square" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="topSlider mt-6">
        <h1 className="headingS">Categories</h1>
        <div className="mt-4 text-green-500">
          {filteredBlogs.map((data, index) => {
            const { title } = data;
            return (
              <p className="rightSlider border-b py-4" key={index}>
                <a href={`#${title}`} className="grow">
                  {index + 1}. {title}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsSidebar;
