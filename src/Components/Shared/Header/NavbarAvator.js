import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init.config';
import PageLoading from '../Loading/Loading';

const NavbarAvator = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const userName = <>{user?.uid ? user.displayName ? user.displayName : <Link to='/updateprofile'>Update Profile</Link> : 'No User'}</>

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
    const LoginLogOut = <a>
        {user ? <p onClick={handleSignOut} >Logout</p> : <Link to='/login'>Login</Link>}
    </a>
    if (loading) {
        return <PageLoading></PageLoading>
    }
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt='' />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                <li><a>{userName}</a></li>
                <li><Link to={'/updateprofile'}>Settings</Link></li>
                <li>{LoginLogOut}</li>
                {/* {BookingCart(AllBooking)} */}
            </ul>
        </div>
    );
};

export default NavbarAvator;