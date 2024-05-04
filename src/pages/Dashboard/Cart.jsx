import React from 'react'
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAnxiosSecure from '../../hooks/useAnxiosSecure';

export default function Cart() {
 
   const [cart, refetch] = useCart();
   // reduce duita item thakbe prev and current value
   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
   //delete

       const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

              axios.delete(`http://localhost:5000/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

  
   
      return (
         <div>
            {cart.length > 0 ?<>
            <div className="flex justify-evenly mb-8">
               <h2 className="text-4xl">Items: {cart.length}</h2>
               <h2 className="text-4xl">Total Price: {totalPrice}</h2>
               <button className="btn btn-primary">Pay</button>

            </div>
            {/* table start */}
            <div className="overflow-x-auto  ">
               <table className="table  w-full">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>
                           #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        cart.map((item, index) => <tr key={item._id}>
                           <th>
                              {index + 1}
                           </th>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              {item.name}
                           </td>
                           <td>${item.price}</td>
                           <th>
                              <button
                                 onClick={() => handleDelete(item._id)}
                                 className="btn btn-ghost btn-lg">
                                 <FaTrashAlt className="text-red-600"></FaTrashAlt>
                              </button>
                           </th>
                        </tr>)
                     }


                  </tbody>
               </table>
               </div>
            </> : <>
            <p className='text-8xl  text-center'>no item added , please add some item</p>
            </>}
         </div>
      )
   }

