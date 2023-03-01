import React from 'react';
import Breadcumb from "../../../Components/Shared/Breadcumb";
import headerImage from '../../../Assets/images/Services/Header/header.jpg'

const Header = () => {
  return (
    <div>
      <div className="relative bg-black">
        <div>
          <img
            src={headerImage}
            alt=""
            className="h-[400px] w-full object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;