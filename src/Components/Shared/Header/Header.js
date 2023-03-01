import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='bg-black fixed top-0 w-full z-50'>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;