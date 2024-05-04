import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import OrderFood from '../pages/Menu/orderfood/OrderFood';
import Login from "../pages/reg/login/Login";
import SignUp from "../pages/reg/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../provider/Secret";

import Cart from "../pages/Dashboard/Cart";
import Alluser from "../pages/Dashboard/dashboard/adminpanel/Alluser";
import Dashboard from "../pages/Dashboard/dashboard/adminpanel/Dashboard";



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
        //admin panel
        {
          path: 'users',
          element:<Alluser></Alluser>
        }
      ]
    }
]);
