import React, { useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(login({ username, password }));

    if (username === "admin" && password === "1234") {
      navigate("/"); 
    } else {
      setError("Invalid credentials (try admin / 1234)");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 rounded-2xl p-6 shadow-md
                   flex flex-col items-center justify-center space-y-4 
                   focus-within:ring-2 focus-within:ring-blue-500 
                   transition-all duration-200"
      >
        <ArrowRightOnRectangleIcon className="h-12 w-12 text-gray-700 rounded-lg" />
        <h1 className="font-bold text-lg">Login with Username</h1>

        <label htmlFor="username" className="self-start font-medium">
          Username:
        </label>
        <input
          className="w-[250px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="username"
          value={username}
           onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password" className="self-start font-medium">
          Password:
        </label>
        <input
          className="w-[250px] border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-[250px] bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>

        {error && !isAuthenticated && (
          <p className="text-red-500 mt-2">{error}</p>
        )}
      </form>
    </div>
  );
};

export default LogIn;
