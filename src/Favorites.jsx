import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Favorites = () => {

    const{showDetails,addToFav,removeFromFav,setFavorite,favorite,createFav,meals} = useGlobalContext()



  return (
    <div className='fav-container'>
        
        <h3>favorites</h3>
        <div className='fav'>
        {favorite.map((fav)=>{
        return (<div className='favitem'>
            <img src={fav.strMealThumb} onClick={()=>{
                showDetails(fav)
                }}/>
            <p onClick={()=>{
                removeFromFav(fav)
            }}>x</p>
            

        </div>)
    })}
    </div>
    </div>
  )
}

export default Favorites