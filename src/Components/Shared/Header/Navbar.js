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
        {user ? <p onClick={handleSignOut} >Logout</p> : <Link to='/login'>Login</Link>}
    </>

    const ActiveBtn = 'hover:bg-primary text-white rounded active:bg-primary focus:outline-none'
    const NavMenu = <>
        <li className={ActiveBtn}><NavLink to='/'>Home</NavLink></li>
        <li className={ActiveBtn}><NavLink to='/rooms'>Rooms</NavLink></li>
        <li className={ActiveBtn}><NavLink to='/services'>Services</NavLink></li>
        <li className={ActiveBtn}><NavLink to='/offers'>Offers</NavLink></li>
        <li className={ActiveBtn}><NavLink to='/blog'>Blog</NavLink></li>
        <li className={ActiveBtn}><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li className={ActiveBtn}>{LoginLogOut}</li>
    </>

    return (
        <div className="navbar bg-blue-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <div>
                        <label tabIndex={0} onClick={() => setSidebar(!sidebar)} className="btn bg-transparent border-none -ml-1 lg:hidden">
                            {
                                sidebar ? <TfiClose className="text-lg" /> : <TfiAlignJustify className="text-lg" />
                            }
                        </label>

                        <ul tabIndex={0} onClick={() => setSidebar(!sidebar)} className={`w-[300px] -ml-2 mt-2 h-screen rounded-none menu dropdown-content transition 
                        shadow text-white bg-black ${sidebar ? "block duration-500 ease-in-out" : "hidden"}`}>
                            {NavMenu}
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-black" href='#l'>Paradise Palms</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {NavMenu}
                </ul>
            </div>
            <NavbarAvator></NavbarAvator>
        </div>
    );
};

export default Navbar;