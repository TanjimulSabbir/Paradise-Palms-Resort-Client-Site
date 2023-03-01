import React from 'react';
import Banner09 from '../Home/Banner09/Banner09';
import Banner09Heading from './Banner09Heading';
import BlogsSidebar from './BlogsSidebar';
import ScrollToTopButton from '../../Components/Shared/ScrollTop/Scrolltop';


const Blogs = () => {
 
  return (
    <div className='lg:flex UniversalPadding py-14'>
     <div className='lg:w-[30%]'>
      <Banner09Heading/>
     <BlogsSidebar/>
     </div>
        <div className='lg:w-[70%]'>
        <Banner09/>
        </div>
        <ScrollToTopButton/>
    </div>
  );
};

export default Blogs;