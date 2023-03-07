import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Header from "./Header";
import Banner01 from "./Banner01";
import Breadcumb from "../../../Components/Shared/Breadcumb";

const Services = () => {
  useTitle('Services')
  return (
    <div>
      <Header />
      <Banner01 />
      <Breadcumb></Breadcumb>
    </div>
  );
};

export default Services;
