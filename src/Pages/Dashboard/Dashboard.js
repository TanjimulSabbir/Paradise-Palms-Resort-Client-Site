import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet, useLocation } from 'react-router-dom'
import PageLoading from '../../Components/Shared/Loading/Loading'
import auth from '../../Firebase/Firebase.init.config'
import useAdmin from '../../Hooks/useAdmin'
import useBooking from '../../Hooks/useBooking'
import { DBContext } from '../UserDBProvider/UserDBProvider'
import AdminModal from './AdminModal'
import AllBookings from './AllBooking'


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [adminCheckingValue, setAdminCheckingValue] = useState('')
    const [AllAdmin] = useAdmin();
    const [user] = useAuthState(auth)
    const { BookingCart } = useContext(DBContext);
    const [AllBooking, isLoading, isError] = useBooking();
    const location = useLocation();
    const pathName = location.pathname;
    const Hover = 'hover:bg-primary'


    useEffect(() => {
        const Role = ["Admin", "Moderator"]
        const FindingAdmin = AllAdmin?.find(admin => admin.email === user?.email);
        const matchedAdmin = Role.includes(FindingAdmin?.userType);
        setAdminCheckingValue(matchedAdmin)
    }, [user, AllAdmin])
    console.log(adminCheckingValue, 'from Dashboard')
    // const matchedAdmin = true
    const Menu = <>
        {adminCheckingValue && <li>
            <Link className={`text-black ${Hover}`} to='/dashboard/alluser'>All User</Link>
        </li>}
        <li className='flex flex-row items-center lg:justify-between'>
            <Link className={`text-black ${Hover}`} to='/dashboard/allbooking'>All Booking
                <p className='block lg:hidden'>{BookingCart(AllBooking)}</p></Link>
            <p className='hidden lg:block'>{BookingCart(AllBooking)}</p>
        </li>
        {adminCheckingValue && <li>
            <Link className={`text-black ${Hover}`} to='/dashboard/makeadmin'>Make Admin</Link>
        </li>}
        {adminCheckingValue && <li>
            <label htmlFor="my-modal-3" onClick={() =>
                setIsOpen(true)} className={`text-black ${Hover}`}>Admin User</label>
        </li>}
    </>

    const DropDownBtn = <label tabIndex={0} onClick={() => setIsOpenMenu
        (!isOpenMenu)} className="btn btn-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
    </label>

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div class="absolute top-2 right-8 z-50">
                    <div class="dropdown dropdown-end relative">
                        {DropDownBtn}
                        <ul tabIndex={0} className={`dropdown-content menu p-2 shadow-2xl
                        bg-white rounded-box w-52 ${isOpenMenu ? 'block' : "hidden"}`}>
                            {Menu}
                        </ul>
                    </div>
                </div>

                <div className="drawer-content">
                    <Outlet></Outlet>
                    {
                        pathName === '/dashboard' && <AllBookings />
                    }
                </div>
                <div className="drawer-side rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-100">
                        {Menu}
                    </ul>
                </div>
            </div>
            {
                isOpen && <AdminModal></AdminModal>
            }
        </div>
    )
}

export default Dashboard



