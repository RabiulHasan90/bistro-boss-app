import React from 'react'
import { FaAd, FaBook, FaHome, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa'
import { FaCalendar,  FaList } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import useCart from '../../../../hooks/useCart';
import { MdPermContactCalendar } from 'react-icons/md';
import useAdmin from '../../../../hooks/useAdmin';
import useDelivery from '../../../../hooks/useDelivery';
import bg from '../../../../assets/icon/bg.png';

export default function Dashboard() {
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const [isDelivery] = useDelivery();

    
  return (
     <div className="flex">
            {/* dashboard side bar */}
          <div className="w-64 min-h-screen  " style={{ backgroundImage: `url(${bg})`, color: 'red' }}>
                <ul className="menu p-4">
                   {
                       isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminDashboard">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                          :
                          <>
                          {
                              isDelivery ? 
                              <>
                            <li>
                                <NavLink to="/dashboard/deliverymanHome">
                                    <FaHome></FaHome>
                                    deliveryman Home</NavLink>
                                          </li>
                                          <li>
                                    <NavLink to="/dashboard/carts">
                                        <FaShoppingCart></FaShoppingCart>
                                         delivery details</NavLink>
                                </li>
                           
                           
                        </>
                       :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                              </>
                              
                              }
                              </>

                          
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                  </li>
                     <li>
                        <NavLink to="/dashboard/contact">
                            <MdPermContactCalendar></MdPermContactCalendar>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
  )
}
