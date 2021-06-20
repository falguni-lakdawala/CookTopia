

import React from 'react'
import Recipecard from './Recipecard'

const Recipes = () => {

    return(

    <div className="recipes">
        <h3>Recipe's Today</h3>
        <p>Try daily recommended dishes by cooktopia.</p>
    <Recipecard recipes={[{src:"https://picsum.photos/100/100?random=5",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=6",title:"chicken Biryani",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=8",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"}
]}/>
    </div>

    )
}

export default Recipes;