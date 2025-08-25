import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Mock client secret for demo - in production, fetch from your server
  useEffect(() => {
    // Simulate fetching client secret from server
    const fetchClientSecret = async () => {
      try {
        // In production, replace this with an actual API call
        // const response = await fetch('/create-payment-intent', {...});
        // const data = await response.json();
        // setClientSecret(data.clientSecret);
        
        // For demo purposes only - remove in production
        setClientSecret("pi_3MtwBwLkdIwHu7ix28a3tqPa_secret_YrKJUKribcBjcG8HVhfZluoGH");
      } catch (error) {
        setError('Failed to initialize payment. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchClientSecret();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements || !clientSecret) {
      return;
    }
    
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

  // Custom styling for the card element
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  // Inline styles for the component
  const styles = {
    paymentContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)",
      padding: "20px"
    },
    paymentCard: {
      width: "100%",
      maxWidth: "500px",
      background: "white",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      overflow: "hidden"
    },
    paymentHeader: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "30px",
      textAlign: "center"
    },
    paymentForm: {
      padding: "30px"
    },
    formGroup: {
      marginBottom: "25px"
    },
    formLabel: {
      display: "block",
      marginBottom: "10px",
      fontWeight: "600",
      color: "#4a5568",
      fontSize: "14px"
    },
    cardElementContainer: {
      padding: "15px",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      background: "#f7fafc",
      transition: "border-color 0.3s, box-shadow 0.3s"
    },
    paymentButton: {
      width: "100%",
      padding: "16px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    paymentButtonDisabled: {
      background: "#cbd5e0",
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none"
    },
    paymentButtonHover: {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)"
    },
    spinner: {
      width: "18px",
      height: "18px",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTopColor: "white",
      animation: "spin 1s ease-in-out infinite",
      marginRight: "10px"
    },
    errorMessage: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      borderRadius: "8px",
      marginTop: "20px",
      fontSize: "14px",
      background: "#fed7d7",
      color: "#c53030"
    },
    successMessage: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      borderRadius: "8px",
      marginTop: "20px",
      fontSize: "14px",
      background: "#c6f6d5",
      color: "#2f855a"
    },
    securityInfo: {
      display: "flex",
      justifyContent: "center",
      marginTop: "25px",
      gap: "20px"
    },
    securityBadge: {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      color: "#718096"
    },
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 0"
    },
    loadingSpinner: {
      width: "40px",
      height: "40px",
      border: "3px solid #e2e8f0",
      borderRadius: "50%",
      borderTopColor: "#667eea",
      animation: "spin 1s ease-in-out infinite",
      marginBottom: "15px"
    }
  };

  // Add CSS animation to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.paymentContainer}>
      <div style={styles.paymentCard}>
        <div style={styles.paymentHeader}>
          <h2 style={{ margin: "0 0 10px", fontSize: "24px", fontWeight: "600" }}>
            Complete Your Payment
          </h2>
          <p style={{ margin: "0", fontSize: "14px", opacity: "0.9" }}>
            Secure payment processing by Stripe
          </p>
        </div>
        
        {loading ? (
          <div style={styles.loadingContainer}>
            <div style={styles.loadingSpinner}></div>
            <p>Loading payment form...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.paymentForm}>
            <div style={styles.formGroup}>
              <label htmlFor="card-element" style={styles.formLabel}>
                Credit or Debit Card
              </label>
              <div 
                style={styles.cardElementContainer}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#667eea";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <CardElement 
                  id="card-element"
                  options={cardStyle}
                  onChange={(event) => {
                    setIsComplete(event.complete);
                    setError(event.error ? event.error.message : null);
                  }}
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={!stripe || processing || !isComplete || !clientSecret}
              style={{
                ...styles.paymentButton,
                ...((!stripe || processing || !isComplete || !clientSecret) ? styles.paymentButtonDisabled : {}),
                ...((!processing && stripe && isComplete && clientSecret) ? styles.paymentButtonHover : {})
              }}
              onMouseEnter={(e) => {
                if (!processing && stripe && isComplete && clientSecret) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(102, 126, 234, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {processing ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={styles.spinner}></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <span>Pay Now</span>
              )}
            </button>
            
            {error && (
              <div style={styles.errorMessage}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginRight: "10px" }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div style={styles.successMessage}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginRight: "10px" }}
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Payment Successful! Thank you for your purchase.</span>
              </div>
            )}
            
            <div style={styles.securityInfo}>
              <div style={styles.securityBadge}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginRight: "5px" }}
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Secure SSL Encryption</span>
              </div>
              <div style={styles.securityBadge}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ marginRight: "5px" }}
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
                </svg>
                <span>PCI Compliant</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckOut;