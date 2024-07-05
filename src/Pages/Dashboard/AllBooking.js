import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import toast  from 'react-hot-toast';
import PageLoading from '../../Components/Shared/Loading/Loading';
import auth from '../../Firebase/Firebase.init.config';
import useBooking from '../../Hooks/useBooking'
import { DBContext } from '../UserDBProvider/UserDBProvider';
import { BsTrash } from 'react-icons/bs';

const AllBooking = () => {
    const [user] = useAuthState(auth)
    const [AllBooking, isLoading, isError] = useBooking();
    const { BookingDelete } = useContext(DBContext);

    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    if (isError) {
        toast.info('Data geting error')
    }
    if (AllBooking?.length < 1) {
        return <h1 className='h-screen font-bold bg-blue-200 flex justify-center items-center'>No Booking Found</h1>
    }
    return (
        <div className='py-10 mx-10 mid-lg:mx-0'>
            <h1 className='headingM py-4 text-black'>All Booking</h1>
            <table className="table overflow-x-auto table-zebra w-full">
                <thead>
                    <tr>
                        <td>Serial</td>
                        <th>Booking Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {
                    AllBooking && AllBooking.map((booking, index) => {
                        const { _id, bookingName, price, email, date } = booking;
                        return (<tbody key={_id}>
                            <tr>
                                <td className='border-b font-bold'>{index + 1}</td>
                                <td className='border-b'>{bookingName}</td>
                                <td className='border-b'>{email}</td>
                                <td className='border-b'>{price}</td>
                                <td className='border-b'><Link className='text-sm py-1 px-3 bg-green-600 hover:bg-green-700 transition-colors duration-300 cursor-pointer rounded' to={'/payment'}>Pay</Link></td>
                                <td className='border-b'><p onClick={() => BookingDelete({ date, bookingName, email })}> <BsTrash className="text-red-500 cursor-pointer w-5 h-5" /></p></td>
                            </tr>
                        </tbody>)
                    })
                }
            </table>
            <p className='text-center py-2'> {!user || AllBooking?.length < 0 ? "You haven't booking yet" : ""}</p>
        </div>
    )
}

export default AllBooking