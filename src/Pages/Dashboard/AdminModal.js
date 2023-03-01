import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageLoading from '../../Components/Shared/Loading/Loading';
import auth from '../../Firebase/Firebase.init.config'
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../AuthContext/AuthProvider';
import AdminPower from './AdminPower';

const AdminModal = () => {
    const [AllAdmin, isLoading, refetch, isError] = useAdmin();
    const { UserSignOut } = useContext(AuthContext)
    const [adminPower, setAdminPower] = useState(false);
    const [user] = useAuthState(auth);

    const handleDelete = async (email) => {
        const confirmDelete = window.confirm('Are you want to delete this User?')
        if (!confirmDelete) {
            return;
        }
        try {
            axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            const res = await axios.delete(`http://localhost:5000/admin/${user?.email}`, { data: { email } })
            console.log(res, 'addmin delete')
            if (res.status === 204) {
                toast.success(`${email} Deleted Successfully`);
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
    if (isError) {
        console.log(isError, 'from admin')
    }
    const NotAdminModerator = <p className='font-displayFair headingS text-black'>You are not Admin/Moderator</p>

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    {user ? !AllAdmin?.length ? NotAdminModerator : <div className='flex justify-between items-center'>
                        <h3 className="text-2xl font-diplayFair font-bold">Admin Users</h3>
                    </div> : ""}

                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute 
                    right-2 top-2">✕</label>
                    <table className="table w-full">
                        {
                            AllAdmin && AllAdmin?.map((User => {
                                return (<tbody>
                                    <tr>
                                        <td>{User.email}</td>
                                        <td><label className='badge bg-green-600 
                                        border-none text-black cursor-pointer'
                                            htmlFor="my-modal-admin" onClick={() =>
                                                setAdminPower(true)}>{User.userType}</label>
                                        </td>
                                        <td><button onClick={() => handleDelete(User.email)} className='badge bg-red-600 border-none 
                                        text-black cursor-pointer'>Delete</button></td>
                                    </tr>
                                </tbody>)
                            }))
                        }
                    </table>
                    {user ? "" : <Link to='/login' className='hover:link text-green-500'>
                        No User Found. Login</Link>}
                </div>
                {adminPower && <AdminPower></AdminPower>}
            </div>

        </div>
    )
}

export default AdminModal