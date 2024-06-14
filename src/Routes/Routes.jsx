import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from '../pages/Menu/orderfood/OrderFood';
import Login from "../pages/reg/login/Login";
import SignUp from "../pages/reg/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../provider/Secret";

import Cart from "../pages/Dashboard/dashboard/user/Cart";
import Alluser from "../pages/Dashboard/dashboard/adminpanel/Alluser";
import Dashboard from "../pages/Dashboard/dashboard/adminpanel/Dashboard";
import Additem from "../pages/Dashboard/dashboard/adminpanel/Additem";
import Manageitems from "../pages/Dashboard/dashboard/adminpanel/Manageitems";
import Updateitems from "../pages/Dashboard/dashboard/adminpanel/Updateitems";

import Payment from "../pages/Dashboard/payment method/payment/Payment";
import Cartdeli from "../pages/Dashboard/dashboard/deliveryman/Cartdeli";
import Delyverymaninf from "../layout/deliveryman/Delyverymaninf";
import AdminDashboard from "../pages/Dashboard/dashboard/AdminDashboard";
import Booking from "../pages/Dashboard/dashboard/user/Booking";
import DelivermanHome from "../pages/Dashboard/dashboard/deliveryman/DelivermanHome";
import Checkout from "../pages/Menu/orderfood/Checkout";
import Userorder from "../pages/Dashboard/dashboard/deliveryman/Userorder";
import Contact from "../pages/Dashboard/dashboard/adminpanel/Contact";
import Userhome from "../pages/Dashboard/dashboard/user/Userhome";
import Addreview from "../pages/Dashboard/dashboard/user/Addreview";




export const router = createBrowserRouter([
  {
    path: "/",
      element: <Main /> ,
      children: [{
         path: "/",
         element:<Home />
      },
        {
          path: "menu",
         element: <Menu />
        },
        {
          path: "orderfood/:category",
          element: <OrderFood />
        },
         {
            path: 'info/:id',
            element: <PrivateRoute ><Userorder /> </PrivateRoute>,
            loader : ({params}) => fetch(`http://localhost:5000/carts/info/${params.id}`)
         },
         {
            path: 'book/:id',
            element: <PrivateRoute ><Checkout/></PrivateRoute>,
            loader : ({params}) => fetch(`http://localhost:5000/menu/book/${params.id}`)
         },
         {
          path: "login",
          element: <Login />
        },
          {
          path: "signup",
          element: <SignUp />
        },
           {
          path: "secret",
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
          {   path: 'car',
          element:<Delyverymaninf />
         }
      
    ]
  },
   {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
         {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'userHome',
          element: <Userhome />
        },
         {
          path: 'review',
          element: <Addreview />
        },
        {
          path: 'deliverymanHome',
          element:<DelivermanHome />
        },
         {
          path: 'bookings',
        element:<Booking />
        },
        {
          path: 'adminDashboard',
          element:<AdminDashboard />
        },
       
        //admin panel
         {
          path: 'addItems',
          element:<Additem/>
        },
        {
          path: 'manageItems',
          element: <Manageitems></Manageitems>
        },
        {
          path: 'updateItem/:id',
          element: <Updateitems></Updateitems> ,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'users',
          element:<Alluser></Alluser>
        },
        {
          path: 'payment',
          element:<Payment />
          
        },
        //deliveryman part
         {
          path: '/dashboard/carts',
          element: <Cartdeli   />
        },
        
        
         
      ]
    }
]);
