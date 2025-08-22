import { useEffect,useState } from "react";  

const useRestaurantMenu=(resid)=>{
const[resInfo,setresInfo]=useState(null);
//fetchData
useEffect(() => {
    fetchData();
},[]);

const fetchData=async ()=>{
    const data =await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resid}`,)
         console.log("datadata", data);
         const res = await data.json();
         console.log("restaurant list", res);
         setresInfo(res.data);
  };


return resInfo;
}
export default useRestaurantMenu;