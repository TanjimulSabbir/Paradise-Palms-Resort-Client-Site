import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { BsInfoCircle } from "react-icons/bs";
import AdminPassword from "./AdminPassword";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { EmailLogin } = useContext(AuthContext)

  const onSubmit = (data) => {
    EmailLogin(data)
  };

  return (
    <div className="pb-14 pt-10">
      <div className="card max-w-sm sm:max-w-md mx-auto shadow-2xl border">
        <div className="text-center lg:text-center mt-4">
          <h1 className="text-3xl font-bold font-diplayFair">Login</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
              className="input input-bordered"
            />
            <small className="text-red-500">{errors?.email?.message}</small>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input {...register("password", { required: "Password is required", pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/, message: `Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character` } })} type={show ? "text" : "password"} placeholder="Password" className="input input-bordered" />

            <FontAwesomeIcon onClick={() => setShow(!show)}
              className="text-black cursor-pointer absolute top-[52px] right-2"
              icon={show ? faEye : faEyeSlash}>
            </FontAwesomeIcon>

            <small className="text-red-500">
              {errors?.password?.message}
            </small>
            <label className="label flex">
              <a href="#p" className="label-text-alt link link-hover">
                Forgot password?
              </a>
              <label title="Admin Login" onClick={() => setShowAdmin(true)} htmlFor="my-modal-3"><BsInfoCircle className="cursor-pointer"></BsInfoCircle></label>
            </label>
          </div>

          <div className="form-control mt-4">
            <button className="btn">Login</button>
          </div>
          <p className="text-sm link link-hover">
            Are you new here? <Link to={"/signup"} className='link text-black'>Create an account</Link>
          </p>
        </form>
      </div>
      {showAdmin && <AdminPassword />}
    </div>



  );
};

export default LoginForm;
