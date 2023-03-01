import React from 'react';
import useTitle from '../../Hooks/useTitle';
import LoginForm from './LoginForm';

const Login = () => {
  useTitle('Login')

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;