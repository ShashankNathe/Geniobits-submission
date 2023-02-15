import React from 'react'
import { useGlobalContext } from './context'

const Overlay = () => {

    const {selectedMeal,hideDetails}=useGlobalContext()

  return (
    <div className='overlay'>
        <div className="container-overlay">
            <img src={selectedMeal.strMealThumb} className='overlayimg'/>
            <div className="details">
            <h3>{selectedMeal.strMeal}</h3>
            <p>{selectedMeal.strInstructions}</p>
            <button onClick={hideDetails}>close</button>
            </div>
        </div>
    </div>
  )
}

export default Overlay