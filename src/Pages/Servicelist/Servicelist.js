import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Allservices from './Allservices/Allservices';

const Servicelist = () => {
    const [servicelist, setServicelist] = useState([])
    const { register, handleSubmit } = useForm();
    useState(
        fetch('http://localhost:5000/serviceCollection')
            .then(res => res.json())
            .then(data => setServicelist(data))
        , [])
        const handleReview=data=>{
          console.log(data)
          const name=data.name;
          const rating=data.review;
          const userData={name,rating}
          fetch('http://localhost:5000/rating',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('saveuser',data);
        
        })
        
        }
    return (
        <div>
            <div className='mt-8 flex flex-wrap justify-evenly'>
                {
                    servicelist.map(service => <Allservices key={service._id} service={service}></Allservices>)
                }
            </div>
            <div>
                <h1 className='text-4xl text-center'>Add a review</h1>
                <div className='flex justify-center items-center flex-wrap'>
                    <form className='' onSubmit={handleSubmit(handleReview)}>
          

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", { required: "Name address is required" })} className="input input-bordered w-full max-w-xs" />
                        
                        </div>

                        <div className="form-control w-full max-w-xs ">
                            <label className="label "><span className="label-text">Review</span></label>
                            <input type="text"
                                {...register("review",
                                    { required: "Review is required"}
                                )} className="input input-bordered w-full max-w-xs h-48"/>
                   
                        </div>


                        <input className='btn btn-accent w-full max-w-xs mt-3' value='Submit' type="submit" />
                        
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Servicelist;