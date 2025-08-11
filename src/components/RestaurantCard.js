import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla ,costforTwo} = resData?.info || {};

  return (
    <div className='restaurant-card' style={{ backgroundColor: "#f0f0f0" }}>
        
      <img
        className='res-img'
       
        src={CDN_URL+cloudinaryImageId}
        alt={name || "Restaurant"}
      />
      <h3>{name }</h3>
      
      <h4>{cuisines?.join(" , ") || "No cuisines available"}</h4>
      <h4>{avgRating ? `${avgRating} ⭐` : "No rating"}</h4>
      <h4>{costforTwo}</h4>
      <h4>{sla?.deliveryTime ? `${sla.deliveryTime} mins Delivery Time` : ""}</h4>
    </div>
  );
};

export default RestaurantCard