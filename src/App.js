import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import LogIn from "./components/LogIn";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import store from "./store";
import CheckOut from "./components/CheckOut";
import PaymentComponent from "./components/PaymentComponent";


const AppLayout = () => {
  return (
   
    <div className="app">
      <Header />
      <Outlet />
    </div>
   
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },{
        path:"/checkout",
        element:<PaymentComponent/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
