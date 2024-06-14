import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useAuth from '../../../hooks/useAuth';

import useCart from '../../../hooks/useCart';
import useAxiosPublic from '../../../hooks/useAxiosPublic';



export default function FoodCard({ item }) {
  const { image, name, price, recipe, _id } = item;
  const [, refetch] = useCart()
  const axiosPublic = useAxiosPublic();
 
  const navigate = useNavigate()
  const location = useLocation()
  const {user} = useAuth()
  // const handleItemClick = () => {
   
  //   if (user && user.email) {
  //     //send cart item to the database
  //     const cartItem = {
  //         menuId: _id,
  //         email: user.email,
  //         name,
  //         image,
  //       price,
  //       Response: "process",
  //            date: new Date().toISOString().split('T')[0]
  //     }
  //   axiosPublic.post('carts', cartItem)
  //               .then(res => {
  //                   console.log(res.data)
  //                   if (res.data.insertedId) {
  //                       Swal.fire({
  //                           position: "top-end",
  //                           icon: "success",
  //                           title: `${name} added to your cart`,
  //                           showConfirmButton: false,
  //                           timer: 1500
  //                       });
  //                       // refetch cart to update the cart items count
  //                     // refetch();
  //                     refetch()
  //                   }

  //               })
  //   }
  //   else {
  //     console.log("not user")
  //           Swal.fire({
  //               title: "You are not Logged In",
  //               text: "Please login to add to the cart?",
  //               icon: "warning",
  //               showCancelButton: true,
  //               confirmButtonColor: "#3085d6",
  //               cancelButtonColor: "#d33",
  //               confirmButtonText: "Yes, login!"
  //           }).then((result) => {
  //               if (result.isConfirmed) {
  //                   //   send the user to the login page
  //                   navigate('/login', { state: { from: location } })
  //               }
  //           });
  //       }
    
  // }
  return (
     <div>
        <div className="card  glass">
           <figure><img src={image} alt="car!" /></figure>
            <p className='absolute bg-slate-800 right-0 text-white mt-3 mr-5 px-2'>${ price}</p>
           <div className="card-body">
             
              <h2 className="card-title">{ name}</h2>
              <p>{ recipe}</p>
          <div className="card-actions justify-end">
            <Link to={`/book/${_id}`}>
      <button className="btn btn-primary" >Add to cart</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
