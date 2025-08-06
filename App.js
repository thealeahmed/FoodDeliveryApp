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

const Header=()=>{
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?t=st=1754485012~exp=1754488612~hmac=22f663edde80b0d3196a8a29586c8d59d020209d158b245654cb59b4b67d5100&w=1480"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

// const styleCard ={
// backgroundColor:"#f0f0f0",
// }
const RestaurantCard=(props)=> {
    const {resName,cuisine,rating,deliveryTime}=props 
        return(
            <div className='restaurant-card' style={{ backgroundColor:"#f0f0f0",}}>
                <img className='res-img' src='https://images.deliveryhero.io/image/fd-pk/LH/t4wq-listing.jpg?width=240&height=240'/>
                <h3>{resName}</h3>
                <h4>{cuisine}</h4>
                <h4>{rating}</h4>
                <h4>{deliveryTime}</h4>

            </div>
        )
}
const body =()=>{
    return(
        <div>
            <div className='search-bar'>Search
            </div>
            <div className='restaurant-container'>
                {/* //restaurantCard */}

                <RestaurantCard
                resName="Karachi Biryani"
                Cuisine="Biryani Desi Food"
                rating="4.9 stars"
                deliveryTime="30 minutes"
                />
                  <RestaurantCard
                resName="RoundAbout Restaurant"
                Cuisine="Fast Food"
                rating="4.7 stars"
                deliveryTime="38 minutes"
                />
                  <RestaurantCard
                resName="KFC"
                Cuisine="Fast Food"
                rating="5 stars"
                deliveryTime="15 minutes"
                />
                  <RestaurantCard
                resName="GrubShack"
                Cuisine="Burgers"
                rating="4.9 stars"
                deliveryTime="30 minutes"
                />
            </div>

        </div>
    )
}

const AppLayout= ()=>{
    return <div className="app">
        {Header()}
        {body()}

    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);