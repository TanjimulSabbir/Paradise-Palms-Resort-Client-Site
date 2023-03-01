import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcumb = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/')


    return (
        <div className='uppercase'>
            <ul className='flex text-lora font-bold text-black'>
                <li><Link to='/' className='text-green-500'>Home </Link> </li>
                <li> | {currentPath}</li>
            </ul>
        </div>
    )
}

export default Breadcumb