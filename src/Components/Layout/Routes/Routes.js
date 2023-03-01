import { createBrowserRouter } from "react-router-dom";
import Home from "../../../Pages/Home/Home";
import Login from "../../../Pages/Login/Login";
import Rooms from "../../../Pages/Rooms/Home/Rooms";
import Layout from "../Layout";
import RoomDetailsHome from "../../../Pages/Rooms/RoomsDetails/RoomDetailsHome";
import Description from "../../../Pages/Rooms/RoomsDetails/OutletPart/OutletChild/Description";
import Services from "../../../Pages/Services/Home/Services";
import ChildHome from "../../../Pages/Rooms/RoomsDetails/OutletPart/OutletChild/ChildHome";
import Blogs from "../../../Pages/Blogs/Blogs";
import BlogsDetails from "../../../Pages/Blogs/BlogsDetails";
import ServicesDetails from "../../../Pages/Services/Home/ServiceDetails/ServicesDetails";
import Offers from "../../../Pages/Offers/Offers";
import SignUp from "../../../Pages/SignUp/SignUp";
import UpdateProfile from "../../Shared/UpdateProfile/UpdateProfile";
import Dashboard from "../../../Pages/Dashboard/Dashboard";
import AllUser from "../../../Pages/Dashboard/AllUser";
import AllBooking from "../../../Pages/Dashboard/AllBooking";
import MakeAdmin from "../../../Pages/Dashboard/MakeAdmin";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetailsHome></RoomDetailsHome>,
        children: [
          {
            path: "/rooms/:id/:info",
            element: <ChildHome></ChildHome>,
          },
        ],
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServicesDetails></ServicesDetails>,
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogsDetails></BlogsDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard/alluser',
            element: <AllUser></AllUser>
          },
          {
            path: '/dashboard/allbooking',
            element: <AllBooking></AllBooking>
          },
          {
            path: '/dashboard/makeadmin',
            element: <MakeAdmin></MakeAdmin>
          }
        ]
      },
    ],
  },
]);

export default Router;
