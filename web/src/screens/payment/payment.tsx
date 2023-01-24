import React, { ReactElement } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './checkoutForm';
import { useCreate } from '../../network/services/payment/payment.service';
import { Config } from '../../utils/config';
import { IPayment } from './types';

const stripePromise = loadStripe(Config.STRIPE_PUBLISHABLE_KEY);

const Payment: React.FC<IPayment> = ({ ... props }): ReactElement => {
  const { isSuccess, data, isLoading } = useCreate({total: 100}) //TODO: Harcoded
  return (
    <div>
      {isSuccess && 
        <Elements stripe={stripePromise} options={{clientSecret: data.client_secret}}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      }
      {
        isLoading && <div>Loading</div>
      }
    </div>
    
   
  )
}

export default (Payment);