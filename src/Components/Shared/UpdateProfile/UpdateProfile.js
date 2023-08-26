import React, { useContext, useState } from 'react'
import { useAuthState, useDeleteUser, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init.config';
import { DBContext } from '../../../Pages/UserDBProvider/UserDBProvider';
import PageLoading from '../Loading/Loading';
import ModalUpdatePassword from './ModalUpdatePassword';
import UPdate from './UPdate';
import Buttons from './Buttons';

function UpdateProfile() {
    const [updateProfile, updatingLoading, UpdatinError] = useUpdateProfile(auth);
    const [deleteUser, DeleteLoading, DeleteError] = useDeleteUser(auth);
    const [sendEmailVerification, sending, VarificationError] = useSendEmailVerification(auth);
    const { UpdateDBUser } = useContext(DBContext);

    const [isOpen, setIsOpen] = useState(false)
    const [lastClick, setLastClick] = useState(0);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleUpdate = async (event) => {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const name = event.target.name.value.trim();
        const url = event.target.url.value.trim();

        if (!(name && email && url)) {
            return toast('Provided valid input')
        }
        const ReservedUser = ['tanjimulislamsabbir02@gmail.com', 'tanzimulislamsabbir@gmail.com']
        if (ReservedUser.includes(user?.email)) {
            return toast("You can't Update this user Profile")
        }
        try {
            const res = await updateProfile({ displayName: name, photoURL: url });
            if (res) {
                await UpdateDBUser({ name, photoURL: url })
                toast.success("Updated Succesfully")
                navigate(from, { replace: true })
            }
        }
        catch (err) {
            toast.error("Failed to update profile")
        }
    }
    const handleDelete = () => {
        const ConfirmDelete = window.confirm('Do you want to Delete your Account?')
        if (!ConfirmDelete) {
            return toast("Thanks for back!😍")
        }
        try {
            async function DeletingUser() {
                const res = await deleteUser()
                if (res) {
                    toast.success('User Deleted Successfully')
                    navigate('/login')
                }
            }
            DeletingUser()
        } catch (err) {
            toast.error(err.message)
        }
    }

    const handleVerification = async () => {
        const res = await sendEmailVerification()
        if (res) {
            toast.success('Verification Email Sent')
            const now = Date.now();
            const timeSinceLastClick = now - lastClick;
            if (timeSinceLastClick >= 4 * 1000) {
                setLastClick(now);

            }
        }
    }
    if (updatingLoading) {
        return <PageLoading></PageLoading>
    }
    if (sending) {
        return <PageLoading></PageLoading>
    }
    if (DeleteLoading) {
        return <PageLoading></PageLoading>
    }
    UpdatinError && toast.error(UpdatinError.message);
    DeleteError && toast.error(DeleteError.message);
    VarificationError && toast.error(VarificationError.message);


    const style = 'w-full border-none p-2 rounded text-pink-500 font-bold'
    return (
        <div className='py-14'>
            <div className='flex flex-col-reverse  items-center'>
                <div className='w-full mt-16 max-w-sm md:max-w-md'>
                    <div class="flex justify-between items-center text-sm">
                        <p onClick={handleVerification}
                            disabled={Date.now() - lastClick < 4 * 1000} className={` ${style}`}>
                            Send Email Verification</p>

                        <p className={`  ${style} my-5 cursor-pointer`}>
                            <label htmlFor="my-modal-6" className='cursor-pointer' onClick={() => setIsOpen(true)}>Update Password</label>
                        </p>

                        <p onClick={handleDelete} className={` ${style}`}>
                            Detele Account</p>
                    </div>
                </div>
                <form onSubmit={handleUpdate} className="w-full p-6 max-w-sm sm:max-w-md shadow-xl">
                    <div>
                        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update info </h2>

                        <div className='flex items-center justify-between space-x-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input name='name' type="text"
                                    className="input " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" className="input " />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input name='url' type="url" className="input " />
                        </div>
                      
                    </div>
                </form>
                {/* <UPdate></UPdate> */}
                {/* <Buttons/> */}
            </div>
            {isOpen && <ModalUpdatePassword></ModalUpdatePassword>}
        </div>
    )
}

export default UpdateProfile