import React from "react";
import PageLoading from "../../Components/Shared/Loading/Loading";
import GetBlogs from "../../Hooks/GetBlogs";

const BlogsSidebar = () => {
  const [BlogsData, isLoading] = GetBlogs();
  if (isLoading) {
    return <PageLoading />;
  }
  const BlogTitle = BlogsData.map((blog) => blog.title);
const HandleSearch=()=>{
	alert('Now, Search option is Unavailable')
}

  return (
    <div className="pt-8 p-4">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search Catagories"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={HandleSearch}>
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
        <h1 className="headingS text-black">Catagories</h1>
        <div className="mt-4 text-green-500">
          {BlogTitle.map((title, index) => (
            <p className="border-b py-4">
              <a href={`#${title}`}>
                {index + 1}. {title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSidebar;
