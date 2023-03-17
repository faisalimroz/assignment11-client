import React from 'react';

const Rating = ({rating}) => {
    const {name,img,description}=rating
    return (
        <div className=''>
            <div className="card card-side bg-base-100 w-auto drop-shadow-2xl">
                <img className=' h-20 my-auto w-56 ml-2 rounded-full ' src={img} alt="Movie" />
                <div className="card-body h-340">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Rating;