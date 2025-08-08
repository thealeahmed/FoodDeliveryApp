import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";   
import { useState } from "react";   

const Body =()=>{
    const [listOfRestaurant,setlistOfRestaurant]=useState(resList);

    return(
        <div>
            {/* <div className='search-bar'>Search
            </div> */}
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=> {
                    const topRated=resList.filter(
                        (res)=>res.rating > 4.5
                ); 
                setlistOfRestaurant(topRated);
                }}
                >
                    Top Rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {/* //restaurantCard */}
                {
                    listOfRestaurant.map(restaurant => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }
            </div>

        </div>
    )
}
export default Body;