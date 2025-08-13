import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";

import { MENU_APIURL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resid } = useParams();
  console.log(resid);

  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(resid);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resid}`,
    );
    console.log("datadata", data);
    const res = await data.json();
    console.log("resresres", res);
    setresInfo(res.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .categories[0].itemCards;
  console.log(
    "items",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card,
  );

  return (
    <div className="menu">
      <h1>{resInfo.cards[2]?.card?.card?.info.name}</h1>
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
      </ul>
    </div>
  );
};

export default RestaurantMenu;
