import  { useContext, useEffect, useRef, useState } from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';

import Swal from 'sweetalert2';
import Googlelogin from '../sociallogin/Googlelogin';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';


export default function Login() {
  const capchaRef = useRef();
  const [, refetch] = useCart();
  const navigate = useNavigate()
   const location = useLocation();
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const {googleSignIn} = useAuth()
 
   useEffect(() => {
     loadCaptchaEnginge(6); 
   }, [])

   const submitLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
     console.log(email, password)
     signIn(email, password)
       .then(result => {
         const user = result.user;
         console.log(user)
         
 
        navigate(from, { replace: true });
          
       })


      // refetch();
  }
  const handleValidateCaptcha = () => {
    console.log("ok")

  //  const user_captcha_value = capchaRef.target.value;
   
  //       if (validateCaptcha(user_captcha_value)) {
  //         setDisabled(false);
  //         alert("ok")
  //       }
  //       else {
  //           setDisabled(true)
  //       }
    }

  return (
    <div><div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={submitLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
                 </div>
                    <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                    <input  ref={capchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                    <button onClick={handleValidateCaptcha}>btn</button>

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
