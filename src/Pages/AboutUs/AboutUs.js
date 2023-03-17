import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="card flex flex-row  w-auto shrink-0 h-30">
                <div   className="card-body w-1/2 shrink-0  flex align-items-center bg-orange-200 justify-center h-30">
                    <h1 className="card-title text-4xl font-sans"> Mobifix</h1>
                    <h3 className='text-2xl font-semibold '>We Provide online and offline service. We have skilled employee and modern machiner. We are doing our business since 2000</h3>
                  
                </div>
                <div className='w-1/2 bg-sky-200  h-30'>
                    <figure><img className='w-full ' src="https://i.ibb.co/6rwQc0h/240-F-246948710-2lut-Ysx-Td0-A9e1q-Ye9xv-NN4k8xr-FKZSC.jpg" alt="Album" /></figure>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;