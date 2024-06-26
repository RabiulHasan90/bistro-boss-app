import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/sectiontitle/SectionTitle";
import Swal from "sweetalert2";
import useAnxiosSecure from "../../../../hooks/useAnxiosSecure";
import useMenu from "../../../../hooks/useMenu";
import axios from "axios";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";



export default function Manageitems() {
   const [menu,  ,refetch] = useMenu();
    const axiosPublic = useAxiosPublic()
  
   const handleDeleteItem = (item) => {
      console.log(item)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`menu/${item._id}`);
                console.log(res.data);
               
               
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
               //  axiosSecure.delete(`/menu/${item._id}`)
               //      .then(res => {
               //          if (res.data.deletedCount > 0) {
               //              refetch();
               //              Swal.fire({
               //                  title: "Deleted!",
               //                  text: "Your file has been deleted.",
               //                  icon: "success"
               //              });
               //          }
               //      })


            }
        });
    }
  return (
      <div>
          
            <SectionTitle Heading="Manage Items" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="text-white">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
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
                                    <td className="text-right">${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
  )
}
