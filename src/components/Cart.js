import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../features/cartSlice";
import { CDN_URL } from "../utils/constants";
import PaymentComponent from "./PaymentComponent";
import { Link } from "react-router-dom";
// import {CheckOut} from "./CheckOut";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || item.defaultPrice || 0) * (item.quantity || 1),
    0
  ) / 100;

  return (
    <div className="max-w-5xl mx-auto my-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cartItems.length > 0 && (
        <button
          className="mb-6 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}

      {cartItems.length === 0 && (
        <h2 className="text-xl font-semibold text-gray-700">Cart is Empty!</h2>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 flex flex-col items-center relative"
              >
                <img
                  src={CDN_URL + item.imageId}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <button
                  className="absolute top-2 right-2 bg-red-600 text-white font-bold px-2 py-1 rounded-full shadow hover:bg-red-700 transition"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  &times;
                </button>
                <h3 className="font-semibold text-lg text-center">{item.name}</h3>
                <p className="mt-1 text-gray-600 font-medium">
                  Price: ₹{(item.price || item.defaultPrice) / 100}
                </p>
                {item.quantity > 1 && (
                  <p className="mt-1 text-gray-600 font-medium">
                    Quantity: {item.quantity}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-200 rounded-lg text-right font-bold text-xl">
            Total Price: ₹{totalPrice.toFixed(2)}
          </div>
          <div>
            <Link to="/checkout">
            <button  className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Proceed to Checkout 
            </button>
          </Link>
          </div>
           
        </>
      )}
    </div>
  );
};

export default Cart;
