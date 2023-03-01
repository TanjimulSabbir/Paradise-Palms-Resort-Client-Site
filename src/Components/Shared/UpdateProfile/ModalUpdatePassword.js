import { async } from '@firebase/util';
import React from 'react'
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init.config';
import PageLoading from '../Loading/Loading';

const ModalUpdatePassword = () => {
    const navigate = useNavigate();
    const [updatePassword, updating, error] = useUpdatePassword(auth);

    const handlePassword = (event) => {
        event.preventDefault();

        const password = event.target.password.value
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        const str = "PassWord1";
        const result = regex.test(password); // true

        if (result) {
            const Update = async () => {
                const success = await updatePassword(password);
                if (success) {
                    toast.success('Password Updated')
                    navigate('/')
                }
            }
            Update()
        }
        else {
            alert('Password should have al least 8 charecter with minimum one digit, one uppercase letter, one lowercase letter')
        }
    }
    if (updating) {
        return <PageLoading></PageLoading>
    }
    if (error) {
        toast.error(error.message)
    }
    return (
        <div>{/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handlePassword}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder={'password'} className="input input-bordered" />
                        </div>
                        <button type='submit' className='btn btn-primary mt-4'>Submit</button>
                    </form>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdatePassword