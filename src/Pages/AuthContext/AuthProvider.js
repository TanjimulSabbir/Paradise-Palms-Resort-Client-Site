import axios from "axios";
import React, { createContext } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignOut, useUpdateProfile } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageLoading from "../../Components/Shared/Loading/Loading";
import auth from "../../Firebase/Firebase.init.config";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from.pathname || "/";
    const [user] = useAuthState(auth)
    // Create Email User
    const [createUserWithEmailAndPassword, EmailUser, CreateLoading, CreateError] =
        useCreateUserWithEmailAndPassword(auth);
    // Update Email User
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    // Sign-in/Login Email User
    const [signInWithEmailAndPassword, LogUser, LoginLoading, LoginError] = useSignInWithEmailAndPassword(auth);
    // Sign Out
    const [signOut, loading, error] = useSignOut(auth);

    if (CreateLoading || LoginLoading) {
        return <PageLoading></PageLoading>
    }
    // Create Jwt Token
    const CreateJwtToken = async (UserData) => {
        try {
            const res = await axios.post(`http://localhost:5000/jwt`, { UserData });
            console.log(res.data, res.data.data)
            if (res.status === 201) {
                localStorage.setItem("accessToken", res.data.data);
                AddLoginUser(UserData);
            }
        } catch (error) {
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                signOut()
            }
            toast.error(error.response.data.message)
        }
    };
    const CreateEmailUser = async (data) => {
        try {
            await createUserWithEmailAndPassword(data.email, data.password)
                .then((res) => {
                    if (res.user) {
                        updateProfile({ displayName: data.name })
                        toast.success("Sign-Up Successful");
                        navigate(from, { replace: true });
                    }
                })
        } catch (err) {
            if (CreateError) {
                toast.error(CreateError.message)
            }
        }

    };
    // Add Login User in Database from Dashboard AllUser
    async function AddLoginUser(UserData) {
        try {
            axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
            const res = await axios.post(`http://localhost:5000/alluser/${UserData.email}`, { UserData })
            console.log(res, 'from addLogin User')
            if (res.status === 201) {
                toast.success(res.data.message)
                navigate(from, { replace: true });
            }

        } catch (error) {
            const errorResponse = error.response.data.status;
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                signOut()
                toast.success("User Sign Out Successfully")
            }
            if (errorResponse === 409) {
                toast.info(error.response.data.message)
                navigate(from, { replace: true });
            }
        }
    }
    const EmailLogin = async (data) => {
        try {
            const res = await signInWithEmailAndPassword(data.email, data.password)
            const Success = res.user;
            if (Success) {
                const UserData = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                CreateJwtToken(UserData);
                toast.success('Login Successful');
            }
        } catch (err) {
            if (LoginError) {
                toast.error(LoginError.message)
            }
        }
    };

    // User Sign Out
    const UserSignOut = async () => {
        await signOut();
        toast.success("User Sign out Successfully")
    }

    const AuthInfo = { CreateEmailUser, EmailLogin, UserSignOut };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
