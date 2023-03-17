import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.KEY_PUBLIC);
console.log(stripePromise)
const Payment = () => {
    const { pid } = useParams()
    const [mobile, setMobile] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/serviceCollection/${pid}`)
            .then(res => res.json())
            .then(data => setMobile(data))



    }, [mobile, pid])
    return (
        <div className='h-50'>
            <h1 className='text-center font-bold'>Payment for {mobile.name}</h1>
            <h1 className='text-center font-semibold'>Please pay <strong> ${mobile.price} </strong>for your service</h1>
            <div className='my-6 w-96 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm mobile={mobile}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;