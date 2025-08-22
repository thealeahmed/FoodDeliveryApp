import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const info = item.card.info;
        const price = info.price ? info.price / 100 : info.defaultPrice / 100;

        return (
          <div
            key={info.id}
            className="flex justify-between items-start p-4 border-b border-gray-200 hover:shadow-md rounded-md transition-shadow duration-200"
          >
            {/* Left side: Info */}
            <div className="flex flex-col flex-1 pr-4">
              <div className="flex items-center space-x-2 mb-1">
                {info.isBestseller && (
                  <span className="text-orange-500 font-bold text-sm">
                    ☆ Bestseller
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg mb-1">{info.name}</h3>
              <span className="text-gray-800 font-semibold mb-1">₹{price}</span>
              {info.rating && (
                <span className="text-green-600 font-medium mb-1">
                  ★ {info.rating} ({info.totalRatings}+)
                </span>
              )}
              <p className="text-gray-500 text-sm line-clamp-3">
                {info.description}
              </p>
            </div>

            {/* Right side: Image + Add Button */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <img
                src={CDN_URL + info.imageId}
                alt={info.name}
                className="w-full h-full rounded-lg object-cover"
              />
              <button className="absolute bottom-1 left-1 right-1 bg-white text-green-600 font-bold text-sm py-1 rounded shadow-md hover:bg-green-50 transition">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
