import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Carts = () => {
    const { pid } = useParams()
    const [mobile, setMobile] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/serviceCollection/${pid}`)
            .then(res => res.json())
            .then(data => setMobile(data))

        

    }, [mobile, pid])
    
    return (
        <div>

            

            <div className="card lg:card-side bg-base-100  shadow-xl lg:mx-auto lg:w-2/5 lg:p-25 ">
                <figure><img src={mobile.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{mobile.name}</h2>
                    <p>{mobile.price}</p>
                    <p>{mobile.description}</p>
                    <div className="card-actions ">
                      <Link to={`/payment/${pid}`}>  <button  className="btn btn-primary">Listen</button></Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Carts;