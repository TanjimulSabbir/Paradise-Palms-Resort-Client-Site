import React from 'react';
import { Outlet } from 'react-router-dom'
import AuthProvider from '../../Pages/AuthContext/AuthProvider';
import UserDBProvider from '../../Pages/UserDBProvider/UserDBProvider';

const Main = () => {
    return (
        <div className='mt-16'>

            <AuthProvider>
                <UserDBProvider>
                    <Outlet></Outlet>
                </UserDBProvider>
            </AuthProvider>

        </div>
    );
};

export default Main;