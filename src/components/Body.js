import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import { ClipLoader } from "react-spinners";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

  const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  console.log("promoted", PromotedRestaurantCard); 

  console.log("Restaurants", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);
  //
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const res = await data.json();
    console.log(res);
    const gridWidgetCard = res.data.cards.find(
      (c) =>
        c.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
    );
    //Optional Chaining
    const restaurants =
      gridWidgetCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfRestaurant(restaurants);
    setfilteredRestaurant(restaurants);
    console.log(restaurants);
  };
 const isOnline=useOnlineStatus();
  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline, please check your internet connection
      </h1>
    );
  }
  //ternary operator
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* <div className='search-bar'>Search
            </div> */}
      <div className="filter flex">
  <div className="search p-4 m-4">
    <input
      type="text"
      className="border border-black rounded-md px-3 py-1 
                 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 transition-all duration-200"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      placeholder="Search..."
    />
          <button className="px-4 py-0.5 bg-blue-400 m-4 bg-grey rounded-lg cursor-pointer"
            onClick={() => {
              const searched = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setfilteredRestaurant(searched);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center  ">
        <button
          className=" px-4 py-2 bg-blue-400 flex rounded-lg cursor-pointer "
          onClick={() => {
            const topRated = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setfilteredRestaurant(topRated);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center">

        {Array.isArray(filteredRestaurant) &&
          filteredRestaurant.map((restaurants) => (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {restaurants.info.promoted ? (
                <PromotedRestaurantCard resData={restaurants} />
              ) : (
              <RestaurantCard key={restaurants.info.id} resData={restaurants} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Body;

//when the body component is render as soon as the render is finished it will call
//the callback function in useEffect
//useEffect takes two arguments first is callback fn and the second is dependency array
