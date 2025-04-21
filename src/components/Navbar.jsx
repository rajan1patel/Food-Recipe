import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/StoreContext";

const Navbar = () => {
  const { item, setitem, handleClick } = useContext(GlobalContext);
  console.log(item);
  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        {/* Logo or title */}
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold text-green-600 hover:text-green-800 transition">
            Food Recipe
          </h1>
        </NavLink>

        {/* Search input */}
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter the item"
            name="Search"
            onChange={(e) => setitem(e.target.value)}
            className="border border-gray-300 rounded px-10 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
            onKeyDown={(e) => {
              if (e.key == "Enter") {
               
                handleClick(e);
              }
            }}
          />
          <NavLink to={"/"}>
            <button
              onClick={() => handleClick()}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Search
            </button>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-5 text-lg">
          <NavLink
            to={"/details/:id"}
            className="text-gray-700 hover:text-green-600 transition"
          >
            <li>Details</li>
          </NavLink>
          <NavLink
            to={"/favroities"}
            className="text-gray-700 hover:text-green-600 transition"
          >
            <li>Favorites</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
