import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const StoreContext = ({ children }) => {
  const [item, setitem] = useState(null);
  const [fooditem, setfooditem] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [itemidforrecipe, setitemidforrecipe] = useState(null);
  const [recipe, setrecipe] = useState(null);
  const [fav, setfav] = useState([]);

  // let cpy = [...item];
  async function handleClick(e) {
    if (e) e.preventDefault();
    if (item.trim() === "") {
      alert("Search Box is empty");
    }

    setloading(true);
    seterror(null); // reset previous error

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${item}`
      );
      const result = await response.json();

      if (result?.data?.recipes?.length > 0) {
        setfooditem(result.data.recipes);
      } else {
        setfooditem([]);
        seterror("No recipes found.");
      }
    } catch (err) {
      seterror("Something went wrong while fetching data.");
    } finally {
      setloading(false);
    }

    // console.log(fooditem)
  }

  function handlefav(currentItem) {
    let cpyItem = [...fav];

    // Check if item is already in favorites
    const index = cpyItem.findIndex((item) => item.id === currentItem.id);

    if (index === -1) {
      // Add if not present
      cpyItem.push(currentItem);
    } else {
      // Remove if already present
      cpyItem.splice(index, 1);
    }

    setfav(cpyItem);
  }
  console.log(fav);

  return (
    <GlobalContext.Provider
      value={{
        item,
        setitem,
        fooditem,
        setfooditem,
        loading,
        setloading,
        error,
        seterror,
        itemidforrecipe,
        setitemidforrecipe,
        setrecipe,
        recipe,
        fav,
        setfav,
        handleClick,
        handlefav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default StoreContext;
