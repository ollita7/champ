import React, { ReactElement, useState } from 'react';
import {PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = ({ ... props }): ReactElement => {
  const [errorMsg, setErrorMsg] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:8080/payment/ollita",
      },
    });
    
    if (result.error) {
      const error = !result.error.message ? 'Error': result.error.message
      setErrorMsg(error);
      console.log(error);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        {errorMsg && <div className="errorMsg" style={{color: 'red'}}>{errorMsg}</div>}
        <button disabled={!stripe}>Submit</button>
      </form>
    </div>
    
  )
}

export default (CheckoutForm);