import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet, useLocation } from 'react-router-dom'
import auth from '../../Firebase/Firebase.init.config'
import useAdmin from '../../Hooks/useAdmin'
import useBooking from '../../Hooks/useBooking'
import { DBContext } from '../UserDBProvider/UserDBProvider'
import AdminModal from './AdminModal'
import AllBookings from './AllBooking'
import { TiThLargeOutline } from "react-icons/ti";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [adminCheckingValue, setAdminCheckingValue] = useState('')
    const [AllAdmin] = useAdmin();
    const [user] = useAuthState(auth)
    const { BookingCart } = useContext(DBContext);
    const [AllBooking] = useBooking();
    const location = useLocation();
    const pathName = location.pathname;
    const Hover = 'hover:bg-primary'


    useEffect(() => {
        const Role = ["Admin", "Moderator"]
        const FindingAdmin = AllAdmin?.find(admin => admin.email === user?.email);
        const matchedAdmin = Role.includes(FindingAdmin?.userType);
        setAdminCheckingValue(matchedAdmin)
    }, [user, AllAdmin])

    const Menu = <>
        {adminCheckingValue && <li>
            <Link className={`w-full ${Hover}`} to='/dashboard/alluser'>All User</Link>
        </li>}
        <li className='w-full rounded hover:bg-primary flex flex-row items-center justify-between'>
            <Link to='/dashboard/allbooking'>All Booking
            </Link>
            <p className='block lg:hidden'>{BookingCart(AllBooking)}</p>
            <p className='hidden lg:block'>{BookingCart(AllBooking)}</p>
        </li>
        {adminCheckingValue && <li>
            <Link className={`w-full ${Hover}`} to='/dashboard/makeadmin'>Make Admin</Link>
        </li>}
        {adminCheckingValue && <li>
            <label htmlFor="my-modal-3" onClick={() =>
                setIsOpen(true)} className={`w-full ${Hover}`}>Admin User</label>
        </li>}
    </>

    const DropDownBtn = <label title='Dashboard' tabIndex={0} onClick={() => setIsOpenMenu
        (!isOpenMenu)} className="btn bg-transparent hover:bg-green-600 border-none lg:hidden">
        <TiThLargeOutline className='text-xl text-white' />
    </label>

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div class="absolute top-2 right-16 z-50">
                    <div class="dropdown dropdown-end relative">
                        {DropDownBtn}
                        <ul tabIndex={0} onClick={() => setIsOpenMenu
                            (!isOpenMenu)} className={`w-[300px] -mr-16 mt-2 h-screen rounded-none menu dropdown-content transition bg-black
                        shadow text-white ${isOpenMenu ? 'block' : "hidden"}`}>
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



