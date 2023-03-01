import axios from 'axios';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init.config';
import { AuthContext } from '../Pages/AuthContext/AuthProvider';


function useAllUser() {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)
    const { data: AllUser, refetch, isLoading, isError } = useQuery({
        queryKey: ['UserData',],
        queryFn: async () => {
            try {
                if (user?.email) {
                    axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    const res = await axios.get(`http://localhost:5000/alluser/${user?.email}`)
                    console.log(res, 'from all user')
                    return res.data.data
                }
            } catch (error) {
                const errorStatus = [401, 403].includes(error.response.data.status);
                if (errorStatus) {
                    UserSignOut()
                }
                toast.info(error.response.data.message)
            }
        }
    })

    return [AllUser, isLoading, isError, refetch]
}

export default useAllUser