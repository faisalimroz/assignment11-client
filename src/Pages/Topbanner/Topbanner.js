import React from 'react';

const Topbanner = () => {
    return (
        <div>
            <div className="card flex flex-row  w-auto">
                <div className="card-body w-1/2  bg-orange-300  flex align-items-center justify-center ">
                    <h1 className="card-title text-4xl font-sans"> Quick Mobile Help for All Kind of Phones</h1>
                    <h3 className='text-2xl font-semibold '>We Provide The best service in Dhaka</h3>
                  
                </div>
                <div className='w-1/2 bg-sky-200 '>
                    <figure><img className='w-full ' src="https://i.ibb.co/km2jH8g/behance.jpg" alt="Album" /></figure>
                </div>


            </div>
        </div>
    );
};

export default Topbanner;