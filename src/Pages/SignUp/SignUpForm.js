import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const SignUpForm = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  const { CreateEmailUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    CreateEmailUser(data)
    reset();
  };

  return (
    <div className="pb-14 pt-8">
      <div className="card max-w-sm sm:max-w-md mx-auto shadow-2xl border">
        <div className="text-center lg:text-center mt-4">
          <h1 className="text-3xl font-bold font-diplayFair">SignUp</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /[A-Za-z]+$/i,
                  message: "input should have letter",
                },
              })}
              type="text"
              placeholder="Name"
              className="input input-bordered"
            />
            <small className="text-red-500">{errors.name?.message}</small>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            <small className="text-red-500">{errors?.email?.message}</small>
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/,
                  message: `Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character`,
                },
              })}
              type={show ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
            />

            <FontAwesomeIcon
              onClick={() => setShow(!show)}
              className="text-green-500 cursor-pointer absolute top-[52px] right-2"
              icon={show ? faEye : faEyeSlash}
            ></FontAwesomeIcon>
            <small className="text-red-500">{errors?.password?.message}</small>

            <label className="label">
              <a href="#p" className="label-text-alt link link-hover">
                Already have an Account? <Link to={"/login"} className='link text-green-500'>Login</Link>
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div>
          <p>{errors && errors?.message}</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
