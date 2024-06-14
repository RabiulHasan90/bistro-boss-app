import { useContext, useState } from "react"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../hooks/useCart";

import useDelivery from "../../hooks/useDelivery";
import useAdmin from "../../hooks/useAdmin";
import { MdAddHomeWork } from "react-icons/md";
import { FcHome } from "react-icons/fc";


export default function Navbar() {
  const [isAdmin] = useAdmin();
     const [isDelivery] = useDelivery();
  const [cart] = useCart();
  console.log(cart.length)
  const { user,  logOut } = useContext(AuthContext)
  const handleLogOut = () => {
     logOut()
       .then(() => { })
            .catch(error => console.log(error));
  }
  const navOptions = <>
        <li><Link to={"/"}> Home</Link></li>
    <li><Link to={"/menu"}> menu</Link></li>
    { isDelivery ? <></>  :<>
      <li><Link to={"/orderfood/popular"}> order food</Link></li>
     </>
  }
    <li><Link to={"/secret"}> About</Link></li>

    { isDelivery ? <Link to="/dashboard/carts">
        <button className="">
          <FcHome className="mr-3 text-red-500 text-3xl  lg:text-4xl" />
         
        </button>
      </Link>
      : <> {
        isAdmin ? <Link to="/dashboard/adminDashboard">
          <button className="">
            <MdAddHomeWork  className="mr-3 text-red-500 text-3xl  lg:text-4xl"/>
     
         
        </button>
      </Link>
        : <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaCartPlus className="mr-2"></FaCartPlus>
            <div className="">+{cart.length}</div>
          </button>
        </Link>
      </li>}</>}
    
    
    {
      user ? <>
        {/* <span>{user?.displayName}</span> */}
      <button className=" " onClick={handleLogOut}>logout</button>
      </> :
        " "
        // <><Link to={"/login"} className="btn"> Log in</Link></>
     }
   </>
  return (
    <div><div className="navbar fixed z-10 bg-opacity-30  text-white max-w-[90%] bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
     <motion.div
    initial={{ opacity: 0.5, color: '#ff0000' }}  // Start with red color and half opacity
    animate={{ 
      opacity: 0.5, 
      color: ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ff0000']  // Keyframes for color transition
    }}  
    transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}  // Infinite looping with mirroring for continuous animation
    style={{ fontWeight: 'bold',fontSize: '2rem', textAlign: 'center', marginTop: '1%' , }}  // Optional styling for better visibility
  >
    <h4>Hello</h4>
  </motion.div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
 <div className="navbar-end flex items-center">
    {user ? (
    <>
      <span>{user?.displayName}</span>
      <img src={user?.photoURL} alt="User profile" className="w-10 h-10 rounded-full ml-2" />
    </>
  ) : (
    <Link to="/login" className="btn">Log in</Link>
  )}
</div>
      
</div></div>
  )
}
