import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data,showItems, setShowIndex }) => {
    // const [showItems,setShowItems]=useState(false);
    console.log("category", data); 
    const handleClick = ()=>{
         setShowIndex()
    }
    return (
         <div>
            {/* Accordian Header */}
                <div className=" w-6/12 mx-auto my-4  bg-gray-200 p-4  shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}> 
                <span className="font-bold text-lg">{data.title}({data.itemCards?.length})</span>
                <span>🔽</span>
                   {/* Accordian Body */}
            
            </div>
            {showItems&& <ItemList items={data.itemCards}/> }
            </div>
         
        </div>
    )
}
export default MenuCategory;