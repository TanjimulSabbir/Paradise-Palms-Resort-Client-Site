import axios from 'axios';
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import toast  from 'react-hot-toast';
import auth from '../Firebase/Firebase.init.config';
import { AuthContext } from '../Pages/AuthContext/AuthProvider';


const useAdmin = () => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)

    const { data: AllAdmin = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['MakeAdminData', user?.email],
        queryFn: async () => {
            try {
                if (user) {
                    axios.defaults.headers.common['authorization'] =
                        `Bearer ${localStorage.getItem('accessToken')}`;
                    const res = await axios.get(`https://tourist-booking-server.vercel.app/admin/${user.email}`)
                    return res.data.data;
                }

            } catch (error) {
                const errorStatus = [401, 403].includes(error.response.data.status);
                if (errorStatus) {
                    UserSignOut()
                }
                else {
                    toast.error(error.response.data.message)
                }
            }
        }
    })

    return [AllAdmin, isLoading, refetch, isError]
}

export default useAdmin;