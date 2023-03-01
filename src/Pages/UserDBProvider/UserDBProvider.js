import { async } from '@firebase/util'
import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import PageLoading from '../../Components/Shared/Loading/Loading'
import auth from '../../Firebase/Firebase.init.config'
import useBooking from '../../Hooks/useBooking'
import { AuthContext } from '../AuthContext/AuthProvider'

export const DBContext = createContext()

const UserDBProvider = ({ children }) => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    // When auth user change his/her user_name, then AllUser's database will be also Update
    const UpdateDBUser = async (UserData) => {
        try {
            axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            const response = await axios.put(`http://localhost:5000/alluser/${user?.email}`, { UserData })
            if (response.status === 201) {
                toast.success(response.data.message)
                navigate(from, { replace: true })
            }
        } catch (error) {
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                UserSignOut()
            }
            toast.error(error.response.data.message)
            throw new Error('Failed to update user');
        }
    }

    // Booking Delete from Booking_Form
    const BookingDelete = async (UserData) => {
        console.log(UserData, 'from AllBookind Delete Button')
        const conformDelete = window.confirm("Are you sure to Delete this Booking?")
        if (!conformDelete) {
            return toast('Ha ha ha')
        }
        try {
            axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            const response = await axios.delete(`http://localhost:5000/booking/${user?.email}`, { data: UserData })
            if (response.status === 204) {
                toast.success(`${UserData.bookingName} Deleted Successfully`);
            }
        } catch (error) {
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                UserSignOut()
            }
            toast.error(error.response.data.message);
        }
    }

    // Boooking Cart
    const BookingCart = (AllBooking) => {
        const [isOpen, setIsOpen] = useState(false)
        const seat = []
        const TotalPrice = AllBooking?.reduce((total, booking) => {
            const price = parseFloat(booking?.price?.split('$')[1]);
            const quantity = parseInt(booking.seat);
            seat.push(booking.seat)
            return total + price * quantity;
        }, 0);

        return (
            <div className='dropdown drop-shadow dropdown-end z-50' onClick={() => setIsOpen(!isOpen)}>
                <label tabIndex={0} className="btn btn-circle shadow-lg border-none">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{AllBooking?.length}</span>
                    </div>
                </label>

                <div tabIndex={0} className={`card dropdown-content bg-green-600 shadow-2xl rounded-box w-64 ${isOpen ? "block" : "hidden"}`}>
                    <div className="card-body">
                        <h2 className="card-title text-white font-diplayFair font-bold">{AllBooking.length} {AllBooking.length > 1 && 'items' || 'item'}</h2>
                        <p className='font-openSans font-bold'>Your Total Amount is ${TotalPrice}.</p>
                        <p className='font-openSans font-bold'>You have Booked {AllBooking.length} Room{AllBooking.length > 1 && 's'} and Total {seat.reduce((acc, curr) => acc + Number(curr), 0)} seat.</p>
                    </div>
                </div>
            </div>
        )
    }
    const ProvidingFunction = { UpdateDBUser, BookingDelete, BookingCart }
    return (
        <DBContext.Provider value={ProvidingFunction}>
            {children}
        </DBContext.Provider>
    )
}

export default UserDBProvider