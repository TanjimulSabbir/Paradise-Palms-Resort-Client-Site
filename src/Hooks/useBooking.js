import axios from 'axios';
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init.config';
import { AuthContext } from '../Pages/AuthContext/AuthProvider';

const useBooking = () => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)
    const { data: AllBooking = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['UserData',],
        queryFn: async () => {
            try {
                if (user?.email) {
                    axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    const response = await axios.get(`http://localhost:5000/booking/${user?.email}`)
                    if (response.status === 200) {
                        return response.data.data
                    }
                }
            } catch (error) {
                const errorStatus = [401, 403].includes(error.response.data.status);
                if (errorStatus) {
                    UserSignOut()
                }
                toast.error(error.response.data.message);
            }
        }
    })
    return [AllBooking, isLoading, isError]
}

export default useBooking;