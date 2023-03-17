import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import app from '../firebase.config';
const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate=useNavigate()
    const [createdUserEmail,setCreatedUserEmail]=useState('')
    const {createUser,signInWithGoogle,updateUser}=useContext(AuthContext);
    const auth=getAuth(app)
    const provider=new GoogleAuthProvider()
    const handleSignup= data => {
        console.log(data)
         navigate('/');
        createUser(data.email,data.password)
        .then(result=>{        
            const user=result.user;
            console.log(user)
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
               saveUser(data.name,data.email)
            })
            .catch(err =>console.log(err))
        })
        .catch(error=>console.log(error));
        
    }
    const handleGoogle=()=>{
        console.log("data")
      
        signInWithGoogle(auth,provider)
        .then((result) => {
          
            
            const user = result.user;
            console.log(user)
            
           
          })
        
    }     
    const saveUser=(name,email)=>{
        const user={name,email};
        fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('saveuser',data);
            setCreatedUserEmail(email);
        })
    } 
    return (
        <div className=''>
            <div className='h-[900px]  flex justify-center items-center'>
                <div className=' drop-shadow-xl'>
                    <h2 className='text-4xl text-center'>Signup</h2>
                    <form className='' onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-rose-600'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-rose-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password",
                                    { required: "Password is required", minLength: { value: 6, message: "password must be  6character or longer" } }
                                )} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-rose-600'>{errors.password?.message}</p>}


                        </div>


                        <input className='btn btn-accent w-full max-w-xs mt-8' value='signup' type="submit" />
                        <div>

                        </div>
                    </form>

                    <p>Already have an account? <Link className='text-sky-400' to='/login'>Please Login</Link> </p>
                    <div className='divider'>OR</div>
                    <button onClick={()=>handleGoogle()} className='btn btn-accent w-full max-w-xs mt-8'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
