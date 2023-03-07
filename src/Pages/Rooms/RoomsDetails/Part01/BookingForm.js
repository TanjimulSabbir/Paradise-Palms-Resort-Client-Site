import axios from "axios";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageLoading from "../../../../Components/Shared/Loading/Loading";
import auth from "../../../../Firebase/Firebase.init.config";
import useRoom from "../../../../Hooks/useRoom";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const BookingForm = ({ matchedRoom }) => {
  const [RoomsData, isLoading, isError] = useRoom();
  const [saveMatchedRoom, setSaveMatchedRoom] = useState(matchedRoom)
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [user] = useAuthState(auth);
  const { UserSignOut } = useContext(AuthContext);
  const { _id, price, title, img } = saveMatchedRoom;
  console.log({ saveMatchedRoom })
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const UserData = { ...data, bookingName: title, bookingId: _id, img, price }
    const PostData = async () => {
      try {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        const res = await axios.post(`https://tourist-booking-server.vercel.app/booking/${user?.email}`, { UserData })
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
    <div className="UniversalPadding mt-10 w-full">
      <div>
        <h1 className="text-2xl sm:text-3xl mid-lg:text-2xl p-3 font-diplayFair font-bold text-center text-black">{title}/{price}</h1>
      </div>

      <div className="flex flex-col mid-lg:flex-row w-full mx-auto justify-center items-center py-10 bg-base-100">
        <div className="max-w-sm sm:max-w-md shadow-2xl bg-base-100 h-[610px]">
          <img className="min-h-[610px] rounded-l" src="https://i.ibb.co/tHk9yxk/photo-1596169095544-8605b2f1e3a9-ixlib-rb-4-0.jpg" alt="" />
        </div>
        <div className="w-full max-w-sm sm:max-w-md h-[610px] rounded-r flex items-center justify-center shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-10 space-y-1">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: user ? "user name is required" : "login is required" })}
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
            <button type="submit" className="Btn-Primary w-full rounded ">
              Book the Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
