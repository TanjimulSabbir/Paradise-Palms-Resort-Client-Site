import React from 'react';
import NavbarAvator from './NavbarAvator';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import PageLoading from '../Loading/Loading';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
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
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div>
                        <label tabIndex={0} className="btn btn-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 
                        shadow rounded-box w-52 text-white bg-black">
                            {NavMenu}
                        </ul>
                    </div>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-orange-400" href='#l'>Paradise Palms</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {NavMenu}
                </ul>
            </div>
            <NavbarAvator className=''></NavbarAvator>
        </div>
    );
};

export default Navbar;