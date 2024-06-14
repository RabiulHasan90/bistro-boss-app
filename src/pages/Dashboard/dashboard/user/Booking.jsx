

import { FaAd, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

import { Link, NavLink } from 'react-router-dom';
import useCart from '../../../../hooks/useCart';
import useStore from '../../../../hooks/useStore';

export default function Booking() {
 
   const [store, refetch] = useStore();
   // reduce duita item thakbe prev and current value
   const totalPrice = store.reduce((total, item) => total + item.price, 0);
   //delete

     

  
   
      return (
         <div>
            {store.length > 0 ?<>
            <div className="flex justify-evenly mb-8">
               <h2 className="text-4xl">Recieved Items: {store.length}</h2>
                  <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                   {store.length ? <Link to="/dashboard/payment">
                     <button className="btn btn-primary">total Paid{ totalPrice}</button>
                </Link>:
                "Not Recieved Item"
                }


            </div>
            {/* table start */}
            <div className="overflow-x-auto  ">
               <table className="table  w-full">
                  {/* head */}
                  <thead className='text-white'>
                     <tr>
                        <th>
                           items
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                           <th> <FaAd></FaAd></th>
                            <th>response</th>
                            <th>recieved date</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        store.map((item, index) => <tr key={item._id}>
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
                            
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                
                           </th>
                           <td>{
                              item.Response}
                           </td>
                             <td>{
                              item.date}
                              </td>
                        </tr>)
                     }


                  </tbody>
               </table>
               </div>
            </> : <>
            <p className='text-8xl  text-center'>no item added </p>
            </>}
         </div>
      )
   }

