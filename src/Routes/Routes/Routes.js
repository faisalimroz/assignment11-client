import { createBrowserRouter } from "react-router-dom";
import '../../Layout/Main'
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Carts from "../../Pages/Carts/Carts";
import AboutUs from '../../Pages/AboutUs/AboutUs'
import '../../Pages/Home/Home/Home'
import Home from "../../Pages/Home/Home/Home";
import Servicelist from "../../Pages/Servicelist/Servicelist";

import Signup from "../../Signup/Signup";
import Payment from "../../Pages/Payment/Payment";
import PrivateRoutes from "../../PrivateAuth/PrivateRoutes";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
 const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
         
            {
                path:'/carts/:pid',
                element:<Carts></Carts>
            },
          
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/services',
                element:<Servicelist></Servicelist>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/payment/:pid',
                element:<PrivateRoutes><Payment></Payment></PrivateRoutes>
            },
            
       
       
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
         {
            path: '/dashboard',
            element:<Dashboard></Dashboard>
         }
        ]
    }
])
export default router;