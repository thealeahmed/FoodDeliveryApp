import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

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
  };
  //ternary operator
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* <div className='search-bar'>Search
            </div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="restaurant-container">
        {/* //restaurantCard */}

        {Array.isArray(filteredRestaurant) &&
          filteredRestaurant.map((restaurants) => (
            <Link
              key={restaurants.info.id}
              to={"/restaurants/" + restaurants.info.id}
            >
              {" "}
              <RestaurantCard key={restaurants.info.id} resData={restaurants} />
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
