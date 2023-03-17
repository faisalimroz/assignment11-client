import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/serviceCollection')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mt-8  flex flex-wrap justify-evenly '>
            {
                services.map(service=><Service key={service._id} service={service}></Service>)
            }
        </div>
    );
};

export default Services;