import React from 'react';
import headerImage from '../../../Assets/images/Services/Header/header.jpg'

const Header = () => {
  return (
    <div>
      <img
        src={headerImage}
        alt=""
        className="w-full object-center"
      />
    </div>
  );
};

export default Header;