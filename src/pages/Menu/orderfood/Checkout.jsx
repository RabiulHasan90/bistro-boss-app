import {  useLoaderData, useLocation, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



export default function Checkout() {
 
  const axiosPublic = useAxiosPublic();
 
  const navigate = useNavigate()
  const location = useLocation()
  const {user} = useAuth()
 
    const item = useLoaderData();
   const { image, name, price, recipe, _id, date } = item;
   console.log(item)
   
   const handleItemClick = (event) => {
         event.preventDefault();

        const form = event.target;
        const name1 = form.name.value;
       const date = form.date.value; 
       const address = form.address.value;
       const number = form.number.value;
       
   
    if (user && user.email) {
      //send cart item to the database
      const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
         address,
          number,
          price,
         userPic: user?.photoURL,
         orderPerson: name1,
      
         Response: "process",
        Date: date,
            //  date: new Date().toISOString().split('T')[0]
      }
    axiosPublic.post('carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                      // refetch();
                   
                    }

                })
    }
    else {
      console.log("not user")
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    
  }
    
   
  return (
    <div className="text-red-900 pt-[90px]">
            <h2 className='text-center text-3xl font-bold'>Food name: {name} </h2>
            <form onSubmit={handleItemClick}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white"> Your Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Date</span>
                        </label>
                        <input type="date" name="date" defaultValue={date}  className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" disabled />
              </div>
               <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Address</span>
                        </label>
                        <input type="text" name="address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Contact</span>
                        </label>
                        <input type="number" name="number" placeholder="+01" className="input input-bordered"  />
                    </div>
                </div>
                <div className="form-control mt-6" >
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
  )
}
