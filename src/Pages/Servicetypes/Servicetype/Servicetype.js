import React from 'react';

const Servicetype = ({phone}) => {
    const { name, img, description } = phone
    return (
        <div>
            <div className="">
                <div className=" rounded ">
                    <img className='w-12 h-16 ' src={img} alt="phone" />
                    <p className='decoration-black font-bold'>{name}</p>
                </div>
            </div>


        </div>
    );
};

export default Servicetype;