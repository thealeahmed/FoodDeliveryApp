import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import LogIn from "./LogIn"; 
import Cart from "./Cart";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  //Subscribing to the store uisng Selector
   const cartItems=useSelector((store)=>store.cart.items);
   console.log(cartItems);

  return (
    <div  className="flex bg-cyan-600 justify-between shadow-lg mb-3  ">
      <div>
        <img className="m-4 w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-4">
  <li className="text-white font-bold p-4">
    OnlineStatus: {isOnline ? "✅" : "❌"}
  </li>

  <li>
    <Link to="/">
      <button onClick={()=>{
        
      }} className="px-4 py-2 bg-blue-500 text-white rounded ">
        Home
      </button>
    </Link>
  </li>

  <li>
    <Link to="/about">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        About Us
      </button>
    </Link>
  </li>

  <li>
    <Link to="/contact">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Contact Us
      </button>
    </Link>
  </li>

  <li>
    <Link to="/cart">


    <button className="px-4 py-2 bg-blue-500 text-white rounded">
      Cart-({cartItems.length})
    </button>
    </Link>
  </li>


  <li>
    <Link to="/login">
    <button
      className="px-4 py-2 bg-green-500 text-white rounded"
      
      onClick={() =>
        <LogIn/>
      }
    >
      {btnName}
    </button>
    </Link>
  </li>
</ul>

      </div>
    </div>
  );
};
export default Header;
