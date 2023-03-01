import axios from 'axios';
import React, { useContext } from 'react'
import { useAuthState, } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PageLoading from '../../Components/Shared/Loading/Loading';
import auth from '../../Firebase/Firebase.init.config';
import useAllUser from '../../Hooks/useAllUser'
import { AuthContext } from '../AuthContext/AuthProvider';


const AllUser = () => {
    const [user] = useAuthState(auth)
    const [AllUser, isLoading, refetch] = useAllUser();
    const { UserSignOut } = useContext(AuthContext)
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you want to Delete this user?')
        try {
            if (confirmDelete && user) {
                axios.defaults.headers.common['authorization'] =
                    `Bearer ${localStorage.getItem('accessToken')}`;
                const res = await axios.delete(`http://localhost:5000/alluser/${user?.email}`,
                    { data: { id: id } });
                if (res.status === 204) {
                    toast.success(res.data.message)
                    refetch();
                }
                return refetch()
            }
        } catch (error) {
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                UserSignOut()
            }
            toast.error(error.response.data.message)
        }
    }

    // if (isLoading) {
    //     return <PageLoading></PageLoading>
    // }

    return (
        <div className='py-10'>
            <div className="overflow-x-auto md:UniversalPadding">
                <h1 className='headingM pb-4 text-black'>All User</h1>
                <table className="table w-full border rounded-lg">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    {
                        AllUser && AllUser.map(((User, index) => {
                            const ActiveUser = <div className="indicator">
                                <span className="indicator-item w-2 h-2 bg-green-500 rounded-full">
                                </span>
                                <div className="grid bg-gray-100 shadow-2xl place-items-center px-3 
                                rounded">{User.email}</div>
                            </div>
                            return (<tbody>
                                <tr>
                                    <th className='border-b'>{index + 1}</th>
                                    <td className='border-b'>{User.name}</td>
                                    <td className='border-b'>
                                        {User.email === user?.email ? ActiveUser : User.email}</td>
                                    <td className='border-b' onClick={() => handleDelete(User?._id)}>
                                        <button className='btn btn-sm bg-red-600 text-black border-none'>Delete</button></td>
                                </tr>
                            </tbody>)
                        }))
                    }
                </table>
                {user ? "" : "No User Logged in"}
            </div>
        </div>
    )
}

export default AllUser