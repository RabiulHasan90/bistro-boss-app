import React from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useCart2 from '../../../../hooks/useCart2';
import useDeliver from '../../../../hooks/useDeliver';
import useAuth from '../../../../hooks/useAuth';

export default function Cartdeli() {
    const [cart, refetch] = useCart2();
    const [delivers] = useDeliver();
    const { user } = useAuth();
    console.log("cart", cart.length);
  
    const handleAccept = id => {
        axios.patch(`https://bistro-boss-server-ten-psi.vercel.app/carts/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `way delivery`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    const handleDone = (item) => {
        const { _id, name, image, price,email } = item;
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delivered it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://bistro-boss-server-ten-psi.vercel.app/carts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            const cartItem = {
                                menuId: _id,
                                email,
                                name,
                                image,
                               price,
                                
                                Response: "Recieved",
                                date: new Date().toISOString().split('T')[0]
                            };
                            axios.post('https://bistro-boss-server-ten-psi.vercel.app/stores', cartItem)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: `${name} added to your store`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        refetch();
                                    }
                                });
                        }
                    });

                axios.patch(`https://bistro-boss-server-ten-psi.vercel.app/delivers/${user.email}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Delivered`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
            }
        });
    }

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <div className="flex justify-evenly mb-8">
                        <h2 className="text-4xl">Items Requests: {cart.length}</h2>
                        <h2 className="text-4xl">Total Price: ${totalPrice}</h2>
                        {/* {cart.length ? (
                            <Link to="/dashboard/payment">
                                <button className="btn btn-primary">Pay</button>
                            </Link>
                        ) : (
                            <button disabled className="btn btn-primary">Pay</button>
                        )} */}
                    </div>
                    <p><span className='text-red-500 underline'>Note: </span> if you click on image then show user information. When click accept then it accepted and way to delivery and if you click way delivery then it delivered completed</p>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className='text-white'>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Response</th>
                                    <th>Delivery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                 <Link to={`/info/${item._id}`}>  <button
                                                 
                                                className=" ">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div> </button></Link>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button
                                                onClick={() => handleAccept(item._id)}
                                                className="btn btn-ghost btn-lg">
                                                {item.Response === 'process' ? 'accept' : item.Response}
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDone(item)}
                                                className="btn btn-ghost btn-lg">
                                                {item.Response === 'accepted' ? 'way delivery' : ''}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <p className='text-8xl text-center'>no item added, please add some items</p>
            )}
        </div>
    );
}
