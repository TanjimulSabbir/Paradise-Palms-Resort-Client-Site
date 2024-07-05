import React from 'react';
import Navbar from './Navbar';
import "../../../style/animation.css"
import { useLocation } from 'react-router-dom';

const Header = () => {
    const path = useLocation().pathname
    return (
        <div className={`${path === "/" ? "absolute bg-transparent top-0" : "bg-black sticky top-0"} downSlider w-full z-50`}>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;