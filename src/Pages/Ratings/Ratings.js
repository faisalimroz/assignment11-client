import React, { useEffect, useState } from 'react';
import Rating from './Rating/Rating';

const Ratings = () => {
    const [ratings,setRatings]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/rating')
        .then(res=>res.json())
        .then(data=>setRatings(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-12 gap-3 mb-2 '>
          {
            ratings.map(rating=><Rating key={rating._id} rating={rating}></Rating>)
          }
        </div>
    );
};

export default Ratings;