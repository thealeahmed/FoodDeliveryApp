/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *        -img
 *        -Name of res,star rating,cuisines,deliveryTime
 * 
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body  from './components/Body';  




// const styleCard ={
// backgroundColor:"#f0f0f0",
// }


const resList=[
  {
    "id": 1,
    "resName": "Karachi Biryani",
    "cuisine": "Biryani, Desi Food",
    "rating": 4.9,
    "deliveryTime": "30 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://bakewithzoha.com/wp-content/uploads/2024/03/chicken-biryani-5-scaled.jpg",
    "location": "Gulshan-e-Iqbal, Karachi",
    "tags": [
      "Desi",
      "Spicy",
      "Popular"
    ]
  },
  {
    "id": 2,
    "resName": "RoundAbout Restaurant",
    "cuisine": "Fast Food",
    "rating": 4.7,
    "deliveryTime": "38 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1556745750-68295fefafc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "location": "Clifton, Karachi",
    "tags": [
      "Fast Food",
      "Family Friendly"
    ]
  },
  {
    "id": 3,
    "resName": "KFC",
    "cuisine": "Fast Food",
    "rating": 5.0,
    "deliveryTime": "15 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://cdn.informaconnect.com/platform/files/public/2025-08/background/800x1000/KFC%20Shutterstock%201.jpg?VersionId=qOzZ7n_n1EKbIQRv8hzh6lo4GOYf55UH",
    "location": "Multiple Locations",
    "tags": [
      "International",
      "Burgers",
      "Fried Chicken"
    ]
  },
  {
    "id": 4,
    "resName": "GrubShack",
    "cuisine": "Burgers",
    "rating": 4.9,
    "deliveryTime": "30 minutes",
    "priceRange": "$$",
    "isOpen": false,
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "location": "DHA Phase 6, Karachi",
    "tags": [
      "Burgers",
      "Cheesy",
      "Late Night"
    ]
  },
  {
    "id": 5,
    "resName": "Chopstick Express",
    "cuisine": "Chinese",
    "rating": 4.5,
    "deliveryTime": "35 minutes",
    "priceRange": "$",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1556742205-e10c9486e506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    "location": "Bahadurabad, Karachi",
    "tags": [
      "Chinese",
      "Noodles",
      "Quick"
    ]
  },
  {
    "id": 6,
    "resName": "Pizza Point",
    "cuisine": "Pizza",
    "rating": 4.3,
    "deliveryTime": "25 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://plus.unsplash.com/premium_photo-1679434184720-f729541052eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "location": "North Nazimabad, Karachi",
    "tags": [
      "Pizza",
      "Cheese Lovers",
      "Family Deal"
    ]
  },
  {
    "id": 7,
    "resName": "Subway",
    "cuisine": "Healthy, Sandwiches",
    "rating": 4.2,
    "deliveryTime": "20 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://imgs.search.brave.com/KswUWQBg8mQhu6SwbhPSmtyQ04hpRS8WL97cLIgp78Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTYy/OTc3MTA3Ny9waG90/by9uZXcteW9yay1u/ZXcteW9yay1hLXBl/cnNvbi13YWxrcy1v/dXQtb2YtYS1zdWJ3/YXktc2FuZHdpY2gt/c3RvcmUtb24td2F0/ZXItc3RyZWV0LW9u/LWF1Z3VzdC0yMS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UWE1M09FYTNWUG10/Y0dFOGtUVXpDa0hx/LWVCUkdQQ3ZlbGtH/QVFvQkZPaz0",
    "location": "Multiple Locations",
    "tags": [
      "Healthy",
      "Quick",
      "Customizable"
    ]
  },
  {
    "id": 8,
    "resName": "Hot & Roll",
    "cuisine": "Shawarma, Rolls",
    "rating": 4.6,
    "deliveryTime": "18 minutes",
    "priceRange": "$",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
    "location": "Nazimabad, Karachi",
    "tags": [
      "Wraps",
      "Desi",
      "Budget Friendly"
    ]
  },
  {
    "id": 9,
    "resName": "Cafe Praha",
    "cuisine": "Continental, Desserts",
    "rating": 4.8,
    "deliveryTime": "40 minutes",
    "priceRange": "$$$",
    "isOpen": false,
    "image": "https://caffepraha.com/cdn/shop/files/Untitled_500_x_500_px_450_x_940_px_450_x_900_px_3.jpg?v=1727957186&width=1080",
    "location": "DHA Phase 8, Karachi",
    "tags": [
      "Desserts",
      "Coffee",
      "Date Night"
    ]
  },
  {
    "id": 10,
    "resName": "The Nihari Inn",
    "cuisine": "Desi, Nihari",
    "rating": 4.9,
    "deliveryTime": "32 minutes",
    "priceRange": "$$",
    "isOpen": true,
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    "location": "Saddar, Karachi",
    "tags": [
      "Desi",
      "Traditional",
      "Spicy"
    ]
  }
]

//unique id>>>>>>>>>>>>>>>>>index as key>>>>>>>>>>>>>not using keys(not acceptable)

const AppLayout= ()=>{
    return <div className="app">
        <Header/>
        <Body/>

    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);