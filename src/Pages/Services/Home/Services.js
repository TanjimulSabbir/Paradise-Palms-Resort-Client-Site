import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Header from "./Header";
import Banner01 from "./Banner01";

const Services = () => {
  useTitle('Services')
  return (
    <div>
      <Header />
      <Banner01 />
    </div>
  );
};

export default Services;
