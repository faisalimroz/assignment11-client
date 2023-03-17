import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

import app from '../firebase.config';
const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const navigate=useNavigate()
    const {signin,signInWithGoogle}=useContext(AuthContext)
   
    const auth=getAuth(app)
    const provider=new GoogleAuthProvider()
    const [loginError,setLoginError]=useState('');
    const location =useLocation();
    const from =location.state?.from?.pathname || '/';
    navigate(from, {replace: true})

    const handleLogin = data => {
        console.log(data)
      
        navigate('/');
        setLoginError('')
        signin(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
        })
        .catch(error=>{ console.log(error)
            setLoginError(error.message)})
        }
  
    const handleGoogle=()=>{
        console.log("data")
      
        signInWithGoogle(auth,provider)
        .then((result) => {
          
            
            const user = result.user;
            console.log(user)
          
          })
        
    }       

                
     
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className=' drop-shadow-xl'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-rose-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                { required: "Password is required", minLength: { value: 6, message: "password must be  6character or longer" } }
                            )} className="input input-bordered w-full max-w-xs" />
                             {errors.password && <p className='text-rose-600'>{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>


                    <input className='btn btn-accent w-full max-w-xs' value='login' type="submit" />
                    <div>
                          {loginError && <p>{loginError}</p>}
                    </div>
                </form>
                <p>New to Our site?<Link className='text-sky-400' to='/signup'>Please Signup</Link> </p>
                
                <div className='divider'>OR</div>
                <button onClick={()=>handleGoogle()} className='btn btn-accent w-full max-w-xs mt-8'>Continue With Google</button>
            </div>
          
        </div>
    );
};

export default Login;