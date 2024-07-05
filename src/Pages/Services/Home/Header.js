import React from 'react';
import headerImage from '../../../Assets/images/Services/Header/header.jpg';
import "../../../style/animation.css"

const Header = () => {
  return (
    <div className='rightSliderSlow'>
      <img
        src={headerImage}
        alt=""
        className="w-full h-auto lg:h-[200px]"
      />
    </div>
  );
};

export default Header;