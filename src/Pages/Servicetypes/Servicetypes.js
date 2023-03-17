import React, { useState } from 'react';
import Servicetype from './Servicetype/Servicetype';

const Servicetypes = () => {
    const [phones,setPhone]=useState([])
    useState(
        fetch('http://localhost:5000/phone')
        .then(res=>res.json())
        .then(data=>setPhone(data))
        ,[])
    return (
        <div className='bg-blue-500 p-3 '>

            <div className='text-center'>
               <h1 className='text-5xl font-serif'>Smartphones that We Work With</h1>
              
            </div>
            <div className='flex justify-evenly  gap-3 mt-2'>
            {
                      phones.map(phone=><Servicetype key={phone._id} phone={phone}></Servicetype>)
            }
            </div>
            

        </div>
    );
};

export default Servicetypes;