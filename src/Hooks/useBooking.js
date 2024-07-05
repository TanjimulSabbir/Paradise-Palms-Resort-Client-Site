import axios from 'axios';
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import toast  from 'react-hot-toast';
import auth from '../Firebase/Firebase.init.config';
import { AuthContext } from '../Pages/AuthContext/AuthProvider';

const useBooking = () => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)
    const { data: AllBooking = [], isLoading, refetch, isError } = useQuery({
        queryKey: ['UserData',],
        queryFn: async () => {
            try {
                if (user) {
                    axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    const response = await axios.get(`https://tourist-booking-server.vercel.app/booking/${user.email}`)
                    return response.data.data
                }
            } catch (error) {
                const errorStatus = [401, 403].includes(error.response.data.status);
                if (errorStatus) {
                    UserSignOut()
                }
                else { toast.error(error.response.data.status) }
            }
        }
    })

    return [AllBooking, isLoading, isError]
}

export default useBooking;