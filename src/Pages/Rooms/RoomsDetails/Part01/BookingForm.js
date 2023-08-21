import axios from "axios";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageLoading from "../../../../Components/Shared/Loading/Loading";
import auth from "../../../../Firebase/Firebase.init.config";
import useRoom from "../../../../Hooks/useRoom";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const BookingForm = ({ matchedRoom }) => {
  let [RoomsData, isLoading, isError] = useRoom();
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [user] = useAuthState(auth);
  const { UserSignOut } = useContext(AuthContext);
  const location = useLocation();
  const params = useParams();
  const MatchedRoomData = RoomsData?.find(rooms => rooms._id === params.id)
  const { _id, price, title, img } = MatchedRoomData;

  const navigate = useNavigate()
  const from = location?.state?.from.pathname || "/";

  const onSubmit = async (data) => {
    if (!user) {
      toast.success("Entered")
      return navigate("/login")
    }
    const UserData = { ...data, bookingName: title, bookingId: _id, img, price }

    try {
      if (user) {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        const res = await axios.post(`https://tourist-booking-server.vercel.app/booking/${user?.email}`, { UserData })
        isLoading = true;
        if (res.status === 201) {
          reset();
          toast.success(res.data.message);
          isLoading = false;
          navigate('/dashboard/allbooking')
        }
      }
    } catch (error) {
      const errorStatus = [401, 403].includes(error.response.data.status);
      if (errorStatus) {
        UserSignOut()
      }
      else { toast.error(error.response.data.message) }
    }
  }
  const handleLogInFunc = () => {
    if (!user) {
      toast.info("Login is required")
      return navigate("/login");
    }
  }
  if (isLoading) {
    return <PageLoading></PageLoading>
  }

  return (
    <div className="UniversalPadding mt-10 w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl mid-lg:text-2xl p-3 font-diplayFair font-bold text-center text-black">{title}/{price}</h1>
      </div>

      <div className="flex flex-col mid-lg:flex-row w-full mx-auto justify-center items-center py-10 bg-base-100">
        <div className="max-w-sm sm:max-w-md shadow-2xl bg-base-100 h-[610px]">
          <img className="min-h-[610px] rounded-l object-cover max-h-[610px]" src="https://i.ibb.co/ByJG8qt/Form-Side01.jpg" alt="" />
        </div>
        <div className="w-full max-w-sm sm:max-w-md h-[610px] rounded-r flex items-center justify-center shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-10 space-y-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: user ? "user name is required" : "Login is required" })}
                value={user?.displayName}
                readOnly
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <small className="text-[12px] text-red-500 pl-2">{errors.name?.message}</small>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                {...register("email", { required: user ? "email is required" : "login is required" })}
                value={user?.email}
                readOnly
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <small className="text-[12px] text-red-500 pl-2">{errors.email?.message}</small>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phone", { required: user ? "phone number is required" : "login is required" })}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <small className="text-[12px] text-red-500 pl-2">{errors.phone?.message}</small>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Booking Date</span>
              </label>
              <input
                {...register("date", { required: "date is required" })}
                type="date"
                min="2022-01-01" max="2071-12-31"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              <small className="text-[12px] text-red-500 pl-2">{errors.date?.message}</small>
            </div>
            <div className="form-control w-ful">
              <label className="label">
                <span className="label-text">Adult</span>
              </label>
              <select {...register("seat")} className="select select-bordered w-full">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <small className="text-[12px] text-red-500 pl-2 mb-4">{errors.seat?.message}</small>
            </div>
            <button type="submit" onClick={() => handleLogInFunc()} className="Btn-Primary w-full rounded ">
              Book the Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
