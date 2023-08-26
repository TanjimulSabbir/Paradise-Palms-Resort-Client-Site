import React, { useState } from "react";
import PageLoading from "../../Components/Shared/Loading/Loading";
import useBlogs from "../../Hooks/useBlogs";

const BlogsSidebar = () => {
  // Using destructuring to get BlogsData and isLoading from the useBlogs hook
  const [BlogsData, isLoading] = useBlogs();

  const [filteredBlogs, setFilteredBlogs] = useState(BlogsData);

  const handleSearch = (event) => {
    const inputData = event.target.value.toLowerCase();
    const filtered = BlogsData.filter(blog => blog.title.toLowerCase().includes(inputData));
    setFilteredBlogs(filtered);
  }

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="pt-8 p-4">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Categories"
            className="input input-bordered"
            onChange={handleSearch}
          />
          <button className="btn bg-[#B3F2DD] btn-square" onClick={handleSearch}>
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
      <div className="mt-6">
        <h1 className="headingS text-black">Categories</h1>
        <div className="mt-4 text-green-500">
          {filteredBlogs.map((data, index) => {
            const { title } = data;
            return (
              <p className="border-b py-4" key={index}>
                <a href={`#${title}`}>
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
