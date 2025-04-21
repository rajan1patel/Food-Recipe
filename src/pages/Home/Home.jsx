import React, { useContext } from "react";
import { GlobalContext } from "../../context/StoreContext";
import FoodCard from "../../components/FoodCard";

const Home = () => {
  const { fooditem } = useContext(GlobalContext);

  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center text-green-700">Search Results</h2>

      {fooditem && fooditem.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fooditem.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No recipes found. Try searching something else!</p>
      )}
    </div>
  );
};

export default Home;
