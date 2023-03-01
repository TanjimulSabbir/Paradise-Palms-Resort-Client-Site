import React from "react";
import SignUpForm from "./SignUpForm";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
  useTitle('signUp')
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
