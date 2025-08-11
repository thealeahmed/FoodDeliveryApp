import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";  
import { useState,useEffect } from "react"; 
import { ClipLoader } from "react-spinners";  
import { Shimmer } from "./Shimmer";    
const Body =()=>{
 const [listOfRestaurant,setlistOfRestaurant]=useState([]);
 console.log(listOfRestaurant)
 useEffect(()=>{
        fetchData();
    },[])
        //  
        const fetchData= async()=>{
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json=await data.json(); 
                console.log(json)     
                const gridWidgetCard = json.data.cards.find(
                 (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
                  );
                  //Optional Chaining
                const restaurants = gridWidgetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                console.log('restaurants', restaurants)
                setlistOfRestaurant(restaurants);
        }
        //conditional rendering
     if (listOfRestaurant.length === 0) {
        return <Shimmer/> 
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh"
//       }}
//     >
//       <ClipLoader color="#36d7b7" size={50} />
//     </div>
//   );
}
//ternary operator
    return (listOfRestaurant.length === 0)?  <Shimmer/> : (
        <div>
            {/* <div className='search-bar'>Search
            </div> */}
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=> {
                    const topRated = listOfRestaurant.filter(
                     (res) => res.info.avgRating > 4.5
                    );
                setlistOfRestaurant (topRated);
                }}
                >
                    Top Rated Restaurant</button>
            </div>
            <div className='restaurant-container'>
                {/* //restaurantCard */}

                {Array.isArray(listOfRestaurant) && listOfRestaurant.map(restaurants => (
                 <RestaurantCard 
            key={restaurants.info.id}
            resData={restaurants}
        />
    ))}
            </div>

        </div>
    )
}
export default Body;

//when the body component is render as soon as the render is finished it will call
//the callback function in useEffect
//useEffect takes two arguments first is callback fn and the second is dependency array 
