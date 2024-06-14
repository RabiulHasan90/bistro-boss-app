import React from 'react'
import { FaUtensils } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../../components/sectiontitle/SectionTitle';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function Addreview() {

 const { register, handleSubmit, reset } = useForm();
   const axiosPublic = useAxiosPublic();
   const { user } = useAuth();
 
   const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                
               price: data.price,
                userImage: user?.photoURL,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosPublic.post('/reviews', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Thanks for a review.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };



  return (
    <div>    <SectionTitle Heading="give an review" subHeading="Welcome" ></SectionTitle>
            <div>
           <form
             onSubmit={handleSubmit(onSubmit)}
           >
                  
                    <div className="flex gap-6">
                        {/* category */}
                          <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text text-white">Food Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full text-[#0d2c4c]" />
                    </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text text-white">give a rating within 5*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full text-[#0d2c4c]" />
                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24 text-[#0d2c4c]" placeholder="Bio"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs text-[#0d2c4c] bg-red-600" />
                    </div>

                    <button className="btn">
                        give review <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
  )
}
