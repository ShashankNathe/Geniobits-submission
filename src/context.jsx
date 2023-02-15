import React, { useState, useEffect, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const profileref = useRef()
  const mealsurl = "https://themealdb.com/api/json/v1/1/search.php?s=";
  const mealName = "https://themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState([]);
  const [favorite, setFavourite] = useState([]);
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);


  const showProfile=()=>{
    profileref.current.style.transform = 'translateX(0)'
    // profileref.current.style.transform = 'translateX(0)'
    
  }
  const hideProfile=()=>{
    profileref.current.style.transform = 'translateX(-100%)'
    // profileref.current.style.transform = 'translateX(0)'
    
  }
  
  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchMeals(mealsurl);
  }, []);

  const addToFav = (id) => {
    if (!favorite.includes(id)) {
      setFavourite([...favorite, id]);
    }
    // console.log(id)
  };
  const removeFromFav = (id) => {
    const newFav = favorite.filter(function (fav) {
      return fav !== id;
    });
    setFavourite(newFav);
  };
  const showDetails = (itm) => {
    setOverlay(true);
    setSelectedMeal(itm);
  };
  const hideDetails = (itm) => {
    setOverlay(false);
  };

  const search = (e) => {
    console.log(e.target.previousElementSibling.value);
    const searchMeal = e.target.previousElementSibling.value;
    // fetchMeals(`${mealName}${searchMeal}`)
    fetchMeals(mealName + searchMeal);
    // console.log(fetchMeals(mealName+searchMeal))
    console.log(meals.length);
  };

  return (
    <AppContext.Provider
      value={{
        search,
        hideDetails,
        overlay,
        selectedMeal,
        showDetails,
        meals,
        addToFav,
        removeFromFav,
        favorite,
        setFavourite,
        loading,
        profileref,
        showProfile,
        hideProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
