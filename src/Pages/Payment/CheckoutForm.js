import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ mobile }) => {


    

    const handlePayment=()=>{
        console.log('pay')
    }

    return (
        <>
            
               
                <button onClick={handlePayment}
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    >
                    Pay
                </button>
          
       
    
        </>
    );
};

export default CheckoutForm;