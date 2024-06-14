import  { useContext } from 'react'
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import bg from '../../../assets/icon/bg.png'


import useAxiosPublic from '../../../hooks/useAxiosPublic';

export default function SignUp() {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext)
      const navigate = useNavigate();
    const {
    register,
    handleSubmit,
      watch,
    reset,
    formState: { errors },
  } = useForm()
   const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                          email: data.email,
                          password: data.password,
                          role:"customer",
                            
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => console.log(error))
            })
    };
 console.log(watch("example"))
      
  return (
    <>
      <div className="hero min-h-screen bg-[#191970]" style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse " style={{ backgroundImage: `url(${bg})` }}>
    <div className="text-center lg:text-left" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <form className="card-body bg-[#1f1f68] " onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: `url(${bg})` }}>
              
              <div className="form-control">
          <label className="label">
              <span className="label-text text-white">name</span>
          </label>
           <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered text-[#1f1f68]" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered text-[#1f1f68]" />
                                {errors.photoURL && <span className="text-red-600 ">Photo URL is required</span>}
                            </div>
              {/* <div className="form-control">
          <label className="label">
            
          </label>
           <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white">Email</span>
          </label>
           <input type="email "  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered text-[#1f1f68]" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name='password'  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered text-[#1f1f68]" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                    
                </label>
                <label htmlFor="
                "><p className='px-6'><small>New Here? <Link to="/login">Already have  an account</Link> </small></p></label>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}
