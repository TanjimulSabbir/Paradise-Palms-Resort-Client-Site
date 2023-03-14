import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageLoading from '../../Components/Shared/Loading/Loading';
import auth from '../../Firebase/Firebase.init.config';
import useBooking from '../../Hooks/useBooking'
import { DBContext } from '../UserDBProvider/UserDBProvider';

const AllBooking = () => {
    const [user] = useAuthState(auth)
    const [AllBooking, isLoading, refetch, isError] = useBooking();
    const { BookingDelete } = useContext(DBContext);

    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    if (isError) {
        toast.info('Data geting error')
    }
    if (AllBooking?.length < 1) {
        return <h1 className='h-screen font-diplayFair font-bold bg-blue-200 flex justify-center items-center'>No Booking Found</h1>
    }
    return (
        <div className='py-10 mx-10 mid-lg:mx-0'>
            <h1 className='headingM py-4 text-black'>All Booking</h1>
            <table className="table overflow-x-auto table-zebra w-full">
                <thead>
                    <tr>
                        <td className='font-displayFair'>Serial</td>
                        <th className='font-displayFair'>Booking Name</th>
                        <th className='font-displayFair'>Email</th>
                        <th className='font-displayFair'>Price</th>
                        <th className='font-displayFair'>Payment</th>
                        <th className='font-displayFair'>Options</th>
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
                                <td className='border-b'><Link className='badge badge-lg border-none bg-green-600 hover:bg-green-700 duration-150' to={'/payment'}>Pay</Link></td>
                                <td className='border-b'><p className='btn btn-sm border-none bg-red-500 text-black hover:bg-red-600 duration-150 cursor-pointer' onClick={() => BookingDelete({ date, bookingName, email })}>Booking Delete</p></td>
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