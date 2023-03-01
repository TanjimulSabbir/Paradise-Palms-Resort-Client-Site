import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageLoading from '../../Components/Shared/Loading/Loading';
import useBooking from '../../Hooks/useBooking'
import { DBContext } from '../UserDBProvider/UserDBProvider';

const AllBooking = () => {
    const [AllBooking, isLoading, isError] = useBooking();
    const { BookingDelete } = useContext(DBContext);

    if (isLoading) {
        return <PageLoading></PageLoading>
    }
    if (isError) {
        toast.info('Data geting error')
    }

    return (
        <div className='UniversalPadding py-10'>
            <div className="overflow-x-auto">
                <h1 className='headingM py-4 text-black'>All Booking</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='font-displayFair'>Serial</th>
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
                                    <th className='border-b'>{index + 1}</th>
                                    <td className='border-b'>{bookingName}</td>
                                    <td className='border-b'>{email}</td>
                                    <td className='border-b'>{price}</td>
                                    <td className='border-b'><Link className='badge badge-lg border-none bg-green-600 hover:bg-green-700 duration-150' to={'/payment'}>Pay</Link></td>
                                    <td className='border-b'><p className='badge badge-md border-none bg-red-500 text-black hover:bg-red-600 duration-150 cursor-pointer' onClick={() => BookingDelete({ date, bookingName, email })}>Booking Delete</p></td>
                                </tr>
                            </tbody>)
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default AllBooking