import  { useContext, useEffect, useRef, useState } from 'react'

import { AuthContext } from '../../../provider/AuthProvider';

import Swal from 'sweetalert2';
import Googlelogin from '../sociallogin/Googlelogin';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

import bg from '../../../assets/icon/bg.png'

export default function Login() {
 
  const [, refetch] = useCart();
  const navigate = useNavigate()
  const location = useLocation();

  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

 
   

   const submitLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.pass.value;
     console.log(email, password)
     console.log("fds")
     signIn(email, password)
       .then(result => {
         const user = result.user;
         console.log(user)

         navigate('/')
   
 
       })


     
  }
 

 
  return (
    <div><div className="hero min-h-screen  bg-[#1f1f68]" style={{ backgroundImage: `url(${bg})` }}>
  <div className="hero-content flex-col lg:flex-row-reverse" style={{ backgroundImage: `url(${bg})` }}>
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#191970]" style={{ backgroundImage: `url(${bg})` }}>
      <form className="card-body" onSubmit={submitLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered text-[#1f1f68]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name="pass" className="input input-bordered text-[#1f1f68]" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
                 </div>
                    <div className="form-control">
                                <label className="label">
                                    {/* <LoadCanvasTemplate /> */}
                                </label>
                    {/* <input  ref={capchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered text-[#1f1f68]" />
                    <button >btn</button> */}

                            </div>
                
        <div className="form-control mt-6">
    <input  className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
             
          </form>
          <Googlelogin></Googlelogin>        
          
          
    </div>
  </div>
</div></div>
  )
}
