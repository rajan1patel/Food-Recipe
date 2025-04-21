import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/StoreContext";

const Details = () => {
  // const params=useParams();

  // const{loading,setloading,setrecipe,recipe}=useContext(GlobalContext);

  // async function fetchdata(id) {
  //   setloading(true);
  //   try{
  //     const response=await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
  //     const result=await response.json();
  //     if(result&&result?.data?.recipe){
  //       setrecipe(result.data.recipe);
  //       setloading(false);
  //     }
  //   }catch(e){
  //     console.log(e);
  //   }

  // }
  // useEffect(()=>{
  //   if(params.id){
  //     fetchdata(params.id);
  //   }
  // },[params.id]);

  // if(loading)return <div>Loading data ! please wait</div>

  // console.log(recipe)

  const params = useParams();
  const { loading, setloading, setrecipe, recipe,handlefav,fav} = useContext(GlobalContext);
  async function fetchdata(id) {
    setloading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      if (result && result.data && result.data.recipe) {
        setrecipe(result.data.recipe);
      }
    } catch (e) {
      console.error("Error fetching recipe:", e);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchdata(params.id);
    }
  }, [params.id, setloading, setrecipe]);

  if (loading) return <div>Loading data! Please wait...</div>;
  // console.log(recipe);

  // function handlefav(){
  //   if(fav.indexof(id)==-1){
  //     fav.push(fooditem.id)
  //   }
   
  // }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {recipe && (
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side: Title & Image */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4 text-green-700">
              {recipe.title}
            </h1>
            <img
              src={recipe.image_url}
              alt={recipe.title}
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-6"
            />
          </div>

          {/* Right Side: Details & Ingredients */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg mb-2">
              <strong>Publisher:</strong> {recipe.publisher}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Source:</strong>{" "}
              <a
                href={recipe.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {recipe.source_url}
              </a>
            </p>
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-800">
              {recipe.ingredients?.map((ing, idx) => (
                <li key={idx}>
                  {ing.quantity || ""} {ing.unit || ""} {ing.description}
                </li>
              ))}
            </ul>
            <NavLink to={`/favroities`}>
              <button 
              onClick={()=>handlefav(recipe)}
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              {fav.some(f => f.id === recipe.id) ? "Remove ❤️" : "Add to ❤️"}
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
