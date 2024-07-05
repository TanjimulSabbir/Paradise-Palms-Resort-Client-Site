import axios from 'axios';
import React, { useContext } from 'react'
import { useAuthState, } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast  from 'react-hot-toast';
import auth from '../../Firebase/Firebase.init.config';
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../AuthContext/AuthProvider';

const MakeAdmin = () => {
    const [user] = useAuthState(auth)
    const [AllAdmin, refetch] = useAdmin();
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { UserSignOut } = useContext(AuthContext);

    const onSubmit = async (data) => {
        const UserData = { email: data.email, userType: data.userType }
        const ReservedUser = ['tanjimulislamsabbir02@gmail.com', 'tanzimulislamsabbir@gmail.com']
        if (ReservedUser.includes(data.email)) {
            return toast('User Already Added')
        }
        try {
            axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            const res = await axios.post(`https://tourist-booking-server.vercel.app/admin/${user?.email}`, { UserData })
            if (res.status === 201) {
                toast.success(res.data.message);
                reset()
                refetch();
            }
        } catch (error) {
            reset()
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                UserSignOut()
            }
            else { toast.error(error.response.data.message) }
        }
    }

    return (
        <div className="card mx-auto max-w-sm shadow-2xl mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <h1 className='headingS text-black text-center'>Make Admin</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        placeholder="Email"
                        className="input input-bordered"
                    />
                    <small className="text-red-500">{errors?.email?.message}</small>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Type</span>
                    </label>
                    <select {...register("userType", { required: "User role is required" })} name='userType' className="select select-bordered w-full max-w-xs rounded cursor-pointer">
                        <option>Admin</option>
                        <option>Moderator</option>
                        <option>General</option>
                    </select>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-[#B3F2DD] btn-primary" disabled={user ? false : true}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MakeAdmin