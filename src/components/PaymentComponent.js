import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';

//Create a Stripe promise (stripePromise) using the loadStripe function. This promise is used to load the Stripe.js script asynchronously.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
const PaymentComponent = () => {
  return (
    <div>
      <h1>Stripe Payment Example</h1>
      {/* Wrap the CheckoutForm component with the Elements component and provide the Stripe promise */}
      <Elements stripe={stripePromise}>
        <CheckOut />
      </Elements>
    </div>
  );
};
export default PaymentComponent;