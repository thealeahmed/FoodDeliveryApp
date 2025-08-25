import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const PaymentComponent = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOut />
      </Elements>
    </div>
  );
};

export default PaymentComponent;