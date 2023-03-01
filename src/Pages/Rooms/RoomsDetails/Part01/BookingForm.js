import axios from "axios";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../../../Components/Shared/Header/Navbar";
import PageLoading from "../../../../Components/Shared/Loading/Loading";
import auth from "../../../../Firebase/Firebase.init.config";
import GetRoom from "../../../../Hooks/GetRoom";
import { AuthContext } from "../../../AuthContext/AuthProvider";
import { DBContext } from "../../../UserDBProvider/UserDBProvider";

const BookingForm = ({ matchedRoom }) => {
  const [RoomsData, isLoading, isError] = GetRoom();
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [user] = useAuthState(auth);
  const { UserSignOut } = useContext(AuthContext);
  const { _id, price, title, img } = matchedRoom;
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const UserData = { ...data, bookingName: title, bookingId: _id, img, price }
    const PostData = async () => {
      try {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        const res = await axios.post(`http://localhost:5000/booking/${user?.email}`, { UserData })
        console.log(res)
        if (res.status === 201) {
          reset();
          toast.success(res.data.message);
          navigate('/dashboard/allbooking')
        }
      } catch (error) {
        const errorStatus = [401, 403].includes(error.response.data.status);
        if (errorStatus) {
          UserSignOut()
        }
        toast.error(error.response.data.message);
      }
    }
    if (user) {
      PostData()
    }
    else {
      toast.info('Please, login')
    }
  }

  if (isLoading) {
    return <PageLoading></PageLoading>
  }
  if (isError) {
    return console.log(isError)
  }

  return (
    <div className="w-full px-5 mid-lg:px-1 mt-20 lg:px-5 mid-lg:w-1/3">
      <div className="font-diplayFair">
        <h1 className="bg-black text-white text-2xl rounded p-5">{title}</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3 px-3 lg:px-5 py-4 border">
        <h2 className="headingS text-lg text-black">Drop us your query</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "User Name is required" })}
            value={user?.displayName}
            readOnly
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <small className="text-red-500">{errors.name?.message}</small>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            {...register("email", { required: "Email address is required" })}
            value={user?.email}
            readOnly
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <small className="text-red-500">{errors.email?.message}</small>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            {...register("phone", { required: "Phone Number is required" })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <small className="text-red-500">{errors.phone?.message}</small>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Booking Date</span>
          </label>
          <input
            {...register("date", { required: "Date is required" })}
            type="date"
            min="2022-01-01" max="2071-12-31"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <small className="text-red-500">{errors.date?.message}</small>
        </div>
        <div className="form-control w-ful">
          <label className="label">
            <span className="label-text">Adult</span>
          </label>
          <select {...register("seat")} className="select select-bordered w-full max-w-xs">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <small className="text-red-500">{errors.seat?.message}</small>
        </div>
        <button type="submin" className="Btn-Primary w-full rounded">
          Book the Room
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
