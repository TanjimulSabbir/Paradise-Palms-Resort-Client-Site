import React, { useState } from 'react';
import NavbarAvator from './NavbarAvator';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import PageLoading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [sidebar, setSidebar] = useState(false)
    const navigate = useNavigate();
    const handleSignOut = async () => {
        const confirmSignOut = window.confirm('Do you want to sign out?');
        if (confirmSignOut) {
            const res = await signOut(auth)
            if (res) {
                toast.success('Logout Succesful')
            }
            navigate('/login')
        }
    }

    if (loading) {
        return <PageLoading></PageLoading>
    }
    const LoginLogOut = <>
        {
            user ? <Link to="" onClick={handleSignOut} >Logout</Link> : <Link className='cursor-pointer block'
                to='/login'>Login</Link>
        }
    </>

    const ActiveBtn = 'text-white rounded focus:outline-none font-diplayFair p-4 lg:py-0 hover:bg-gray-800 lg:hover:bg-transparent'
    const NavMenu = <>
        <p className={ActiveBtn}><NavLink to='/'>Home</NavLink></p>
        <p className={ActiveBtn}><NavLink to='/rooms'>Rooms</NavLink></p>
        <p className={ActiveBtn}><NavLink to='/services'>Services</NavLink></p>
        <p className={ActiveBtn}><NavLink to='/offers'>Offers</NavLink></p>
        <p className={ActiveBtn}><NavLink to='/blog'>Blog</NavLink></p>
        <p className={ActiveBtn}><NavLink to='/dashboard'>Dashboard</NavLink></p>
        <p className={ActiveBtn}>{LoginLogOut}</p>
    </>

    return (
        <div className="navbar bg-[#000505]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div>
                        <label tabIndex={0} onClick={() => setSidebar(!sidebar)} className={`btn bg-transparent border-none -ml-1 lg:hidden text-white `}>
                            {
                                sidebar ? <TfiClose className={`text-2xl`} /> : <TfiAlignJustify className="text-2xl" />
                            }
                        </label>

                        <ul tabIndex={0} onClick={() => setSidebar(!sidebar)} className={`w-[300px] -ml-2 mt-2 h-screen rounded-none menu dropdown-content transition 
                        shadow text-white bg-white ${sidebar ? "block duration-500 ease-in-out" : "hidden"}`}>
                            {NavMenu}
                        </ul>
                    </div>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl text-[#2e5798]" href='#l'>Paradise Palms</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white space-x-6 mr-2">
                    {NavMenu}
                </ul>
            </div>
            <NavbarAvator></NavbarAvator>
        </div>
    );
};

export default Navbar;