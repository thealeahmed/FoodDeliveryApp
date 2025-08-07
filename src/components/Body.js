import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";           
const Body =()=>{
    return(
        <div>
            <div className='search-bar'>Search
            </div>
            <div className='restaurant-container'>
                {/* //restaurantCard */}
                {
                    resList.map(restaurant => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>))
                }
            </div>

        </div>
    )
}
export default Body;