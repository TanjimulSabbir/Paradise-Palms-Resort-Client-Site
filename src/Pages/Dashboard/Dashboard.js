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
import "../../style/animation.css"
import toast  from 'react-hot-toast';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [adminCheckingValue, setAdminCheckingValue] = useState('')
    const [AllAdmin] = useAdmin();
    const [user] = useAuthState(auth)
    const pathName = useLocation().pathname.split("/")[2];
    const Hover = 'hover:bg-[#15acc7]'

    useEffect(() => {
        const Role = ["Admin", "Moderator"]
        const FindingAdmin = AllAdmin?.find(admin => admin.email === user?.email);
        const matchedAdmin = Role.includes(FindingAdmin?.userType);
        setAdminCheckingValue(matchedAdmin)
    }, [user, AllAdmin])

    const Menu = <div className='flex flex-col space-y-5 lg:mt-10'>
        {adminCheckingValue &&
            <Link className={`w-full py-2 px-3 rounded transition-all duration-500 ${Hover} cursor-pointer ${pathName === "alluser" && "bg-[#15acc7]"}`} to='/dashboard/alluser'>All User</Link>
        }
        <Link to='/dashboard/allbooking' className={`w-full py-2 px-3 rounded transition-all duration-500 cursor-pointer ${Hover} ${pathName === "allbooking" && "bg-[#15acc7]"}`}>
            All Booking
        </Link>
        {adminCheckingValue &&
            <Link className={`w-full py-2 px-3 ${Hover} ${pathName === "makeadmin" && "bg-[#15acc7]"}`} to='/dashboard/makeadmin'>Make Admin</Link>
        }
        {adminCheckingValue &&
            <label htmlFor="my-modal-3" onClick={() => setIsOpen(true)} className={`w-full py-2 px-3 ${Hover}`}>
                Admin User
            </label>
        }
    </div>

    const DropDownBtn = <label title='Dashboard' tabIndex={0} onClick={() => setIsOpenMenu
        (!isOpenMenu)} className="btn bg-transparent hover:bg-green-600 border-none lg:hidden">
        <TiThLargeOutline className='text-xl text-white' />
    </label>

    return (
        <div>
            <div className="rightSlider drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div class="absolute top-2 right-16 z-50">
                    <div class="dropdown dropdown-end relative">
                        {DropDownBtn}
                        <ul tabIndex={0} onClick={() => setIsOpenMenu
                            (!isOpenMenu)} className={`topSlider w-[300px] space-y-3 -mr-16 mt-2 h-screen rounded-none menu dropdown-content transition bg-black
                        shadow text-white ${isOpenMenu ? 'block' : "hidden"}`}>
                            {Menu}
                        </ul>
                    </div>
                </div>

                <div className="downSlider drawer-content px-10">
                    <Outlet></Outlet>
                    {
                        pathName === '/dashboard' && <AllBookings />
                    }
                </div>
                <div className="drawer-side rounded">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="w-80 bg-gray-100 px-2">
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



