import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init.config';
import PageLoading from '../Loading/Loading';

const NavbarAvator = () => {
    const [user, loading, error] = useAuthState(auth);
    const [Menushow, setMenuShow] = useState(false)
    const navigate = useNavigate()
    const userName = <>{user?.uid ? user.displayName ? user.displayName : <Link to='/updateprofile'>Update Profile</Link> : 'No User'}</>

    const handleSignOut = async () => {
        const confirmSignOut = window.confirm('Do you want to sign out?');
        if (confirmSignOut) {
            const res = await signOut(auth)
            if (res) {
                toast.success('Log-out Succesfully')
            }
            navigate('/login')
        }
    }

    const LoginLogOut = <Link to={user ? "" : "/login"}>
        {user ? <p onClick={handleSignOut} >Logout</p> : "Login"}
    </Link>

    if (loading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div onClick={() => setMenuShow(!Menushow)} className="fixed lg:relative right-2 lg:right-0 top-2 lg:top-0 dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-transparent hover:bg-opacity-25 border-none btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt='' />
                </div>
            </label>

            <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${Menushow ? "hidden" : "block"}`}>
                <li><a>{userName}</a></li>
                <li><Link to={'/updateprofile'}>Settings</Link></li>
                <li>{LoginLogOut}</li>
            </ul>
        </div>
    );
};

export default NavbarAvator;