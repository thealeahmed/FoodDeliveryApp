import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const clientSecret =
  "pi_3MtwBwLkdIwHu7ix28a3tqPa_secret_YrKJUKribcBjcG8HVhfZluoGH"; // Paste your client_secret here

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return; // Stripe.js has not yet loaded

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setError(null);
      setSuccess(true);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe || processing}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#6772E5",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {processing ? "Processing..." : "Pay"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Payment Successful 🎉</p>}
    </form>
  );
};

export default CheckOut;
