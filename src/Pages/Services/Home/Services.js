import React from "react";
import ScrollToTopButton from "../../../Components/Shared/ScrollTop/Scrolltop";
import useTitle from "../../../Hooks/useTitle";
import Header from "./Header";
import SBanner01 from "./SBanner01";
import Service from "./Service";

const Services = () => {
  useTitle('Services')
  return (
    <div>
      <Header />
      <SBanner01 />
      <ScrollToTopButton />
    </div>
  );
};

export default Services;
