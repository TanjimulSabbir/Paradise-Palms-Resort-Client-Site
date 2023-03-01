import React from "react";
import ScrollToTopButton from "../../../Components/Shared/ScrollTop/Scrolltop";
import useTitle from "../../../Hooks/useTitle";
import Header from "./Header";
import Banner01 from "./Banner01";
import Service from "./Service";

const Services = () => {
  useTitle('Services')
  return (
    <div>
      <Header />
      <Banner01 />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
