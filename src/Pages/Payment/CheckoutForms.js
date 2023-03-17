
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({mobile}) => {
   
  const {price,name}=mobile;
  
  

    const handleSubmits=async (event) =>{
      
       console.log('pay')
      
    }
    return (
        <>
          
        
           
                <button onClick={handleSubmits}  className='btn btn-sm mt-4 btn-primary' type="submit">
                    Pay
                </button>
          
            
       
        
        </>
    );
};

export default CheckoutForm;