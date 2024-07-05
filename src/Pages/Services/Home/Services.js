import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Header from "./Header";
import Banner01 from "./Banner01";
import "../../../style/animation.css"

const Services = () => {
  useTitle('Services')
  return (
    <div className="topSlider">
      <Header />
      <Banner01 />
    </div>
  );
};

export default Services;
