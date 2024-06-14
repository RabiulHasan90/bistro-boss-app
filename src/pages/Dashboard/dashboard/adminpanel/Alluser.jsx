import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAnxiosSecure from "../../../../hooks/useAnxiosSecure"
import {
  useQuery,
 
} from '@tanstack/react-query'
import Swal from "sweetalert2";

export default function Alluser() {
    const axiosPublic = axiosPublic();
  const axiosSecure = useAnxiosSecure();
     const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
         queryFn: async () => {
             const res = await axiosSecure.get('/users',
                //  {
                //  headers:{ 
                //    authorization:  `Bearer ${localStorage.getItem('access-token')}`}
                //  }
             );
            return res.data;
        }
     })
   const handleMakeAdmin = user =>{
      axiosPublic.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
     const handleMakeCustomer = user =>{
        axiosPublic.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Customer now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
 const handleDeleteUser = user => {
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

                axios.delete(`/users/${user._id}`)
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
    <div><div className="flex justify-evenly my-4 " style={{ color:'red',backgroundColor: 'rgba(11, 0, 0, 0.5)' }}>
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
          <p className="underline ">[ <span className="text-red-600 text-3xl">Note</span>: if you double click user make past role]</p>
     <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>users</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=" text text-orange-600" >
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    { user.role === 'admin' ? <button  onClick={() => handleMakeCustomer(user)}> Admin </button> : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                    </button>}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div></div>
  )
}
