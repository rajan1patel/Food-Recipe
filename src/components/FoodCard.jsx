import React from "react";
import { NavLink } from "react-router-dom";

const FoodCard = ({ item }) => {
  return (
    <div>
      {item && (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-green-700">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">By: {item.publisher}</p>
            <NavLink to={`/details/${item.id}`}>
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
                Open Recipe
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
