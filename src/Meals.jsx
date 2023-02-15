import React from "react";
import { useGlobalContext } from "./context";
import {AiOutlineLike} from 'react-icons/ai'

const Meals = () => {
  const { loading, meals, addToFav, showDetails } = useGlobalContext();
  return (
    <>
      <div className="meals">
        {loading && <h1 className="loading">loading...</h1>}

        {!loading && meals.length < 1 && <h1>No meals found</h1>}
        {!loading && meals.length > 0 && (
          <>
            <h2>Best recipies from around the world</h2>
            {meals.map(function (meal,index) {
              return (
                <div className="card" key={index}>
                  <img
                    src={meal.strMealThumb}
                    onClick={() => {
                      showDetails(meal);
                    }}
                 alt='meal' />
                  <div>
                    <h3>{meal.strMeal}</h3>
                    
                      <AiOutlineLike onClick={() => {
                        addToFav(meal);
                      }}/>
                    
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Meals;
