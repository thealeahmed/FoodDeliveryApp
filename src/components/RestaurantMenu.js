
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {Shimmer} from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_APIURL } from "../utils/constants";
import MenuCategory from "./MenuCategory";
import { useState } from "react"; 

const RestaurantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
   const { resid } = useParams();
  console.log(resid);
  const resInfo=useRestaurantMenu(resid);
  const[showIndex,setShowIndex]=useState(null);



  if (resInfo === null) {
    return <Shimmer />;
  }
const{name,cuisines,costForTwoMessage}=
resInfo.cards[2]?.card?.card.info || {};

  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0].itemCards;
 
  console.log("items", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (card)=> card.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

console.log("categories", categories); 

  
  return (
    <div className="text-center p-4">
      {/* <h1>{resInfo.cards[2]?.card?.card?.info.name}</h1>
      <h2>{resInfo.cards[2]?.card?.card?.info.costForTwoMessage}</h2>
      <h2>{resInfo.cards[2]?.card?.card?.info.cuisines.join(" ,")}</h2>

      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.price / 100 || item.card.info.defaultprice / 100}
          </li>
        ))}

      </ul> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>
      {/* categorreis accordian */}


      {categories.map((category,index)  =>  

      //Controlled component
      <MenuCategory 
      key={category?.card?.card?.title} 
      data={category?.card?.card}
       showItems={index ===showIndex}
       setShowIndex={() => {
         setShowIndex(showIndex === index ? null : index);
       }
      }
       />
      )}

    </div>
  );
};

export default RestaurantMenu;
