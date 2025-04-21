import React from 'react'
import { NavLink } from 'react-router-dom'

const Favitem = ({ item }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-40 sm:h-48 md:h-56 object-cover"
        />
        <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-green-700">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              By: {item.publisher}
            </p>
          </div>
          <NavLink to={`/details/${item.id}`} className="mt-3">
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base">
              Open Recipe
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Favitem
