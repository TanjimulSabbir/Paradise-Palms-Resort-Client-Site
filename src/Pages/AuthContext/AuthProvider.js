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
    const [signOut] = useSignOut(auth);

    if (CreateLoading || LoginLoading) {
        return <PageLoading></PageLoading>
    }
    // Create Jwt Token
    const CreateJwtToken = async (UserData) => {
        try {
            const res = await axios.post(`https://tourist-booking-server.vercel.app/jwt`,
                { UserData });
            if (res.status === 201) {
                localStorage.setItem("accessToken", res.data.data);
                navigate(from, { replace: true });
                AddLoginUser(UserData);
            }
        } catch (error) {
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                signOut()
            }
            else {
                toast.error(error.response.data.message)
            }
        }
    };
    const CreateEmailUser = async (data) => {
        try {
            await createUserWithEmailAndPassword(data.email, data.password)
                .then((res) => {
                    if (res.user) {
                        updateProfile({ displayName: data.name })
                        toast.success("Sign-Up Successful");
                        signOut()
                        navigate('/login');
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
            const res = await axios.post(`https://tourist-booking-server.vercel.app/alluser/${UserData.email}`, { UserData })
            if (res.status === 201) {
                return;
            }
        } catch (error) {
            const errorResponse = error.response.data.status;
            if (errorResponse === 409) {
                return navigate(from, { replace: true });
            }
            const errorStatus = [401, 403].includes(error.response.data.status);
            if (errorStatus) {
                signOut()
                toast.success("user sign-out successfully")
            }
            else {
                toast.error(error.response.data.message)
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
                console.log(UserData, "userData")
                if (UserData) {
                    CreateJwtToken(UserData);
                }
                toast.success('Login Successful');
            }
        } catch (err) {
            if (LoginError) {
                toast.error(LoginError.message)
            }
            else {
                toast.error("Login Failed")
            }
        }
    };

    // User Sign Out
    const UserSignOut = async () => {
        await signOut();
        toast.success("User Sign-out Successfully")
        navigate("/login")
    }

    const AuthInfo = { CreateEmailUser, EmailLogin, UserSignOut };
    return (
        <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
