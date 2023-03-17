import React from 'react';
import { useNavigate } from 'react-router-dom';

const Allservices = ({service}) => {
    const { img, name, price, _id,description } = service;
    const navigate=useNavigate()
    const handleCart=()=>{
        
        console.log('clicked')
        console.log(_id)
        navigate(`/carts/${_id}`)
      
     }
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl mt-3">
                <figure><img className='w-full md:w-auto h-48' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleCart(_id,name,img,price)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Allservices;