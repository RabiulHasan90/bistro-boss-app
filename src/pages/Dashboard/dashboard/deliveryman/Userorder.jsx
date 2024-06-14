import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useCart from '../../../../hooks/useCart';
import Swal from 'sweetalert2';
import useCart2 from '../../../../hooks/useCart2';

export default function Userorder() {
   const [, refetch] = useCart2();
   const ucart = useLoaderData()
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
                  refetch();
            });
    }
   
   return (
     
      <div>
           <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal shadow-lg">
          <img className="w-full h-48 rounded-t-lg object-cover" src={ucart.image} alt="Food" />
          <div className="mt-4">
                     <h2 className="text-gray-900 font-bold text-xl mb-2">Food Name: { ucart.name}</h2>
                     <p className="text-gray-700 text-base">Price: {ucart.price}</p>
                      <button
                                                onClick={() => handleAccept(ucart._id)}
                                                className="btn btn-secondary btn-lg">
                                                {ucart.Response === 'process' ? 'accept' : ucart.Response}
                                            </button>
          </div>
          <div className="flex items-center mt-4">
                     <img className="w-10 h-10 rounded-full mr-4" src={ ucart.userPic}  alt="Avatar" />
            <div className="text-sm">
                        <p className="text-gray-900 leading-none font-bold">Name: {ucart.orderPerson }</p>
                        <p className="text-gray-600">Contact: { ucart.number}</p>
                        <p className="text-gray-600">Email: { ucart.email}</p>
                        <p className="text-gray-600">Address: { ucart.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
