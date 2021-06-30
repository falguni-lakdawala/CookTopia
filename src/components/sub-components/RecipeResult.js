

import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeResult = () => {

    return(

    <div className="recipes">
        <h3>Recipe's Related to Pasta</h3>
    <RecipeCard recipeClassName="recipe_result" recipes={[{src:"https://picsum.photos/100/100?random=4",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=6",title:"chicken Pizza",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=8",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=5",title:"Italian Pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=25",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=16",title:"chicken Pizza",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=18",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=15",title:"Italian Pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=5",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
{src:"https://picsum.photos/100/100?random=26",title:"chicken Pizza",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=28",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"},
{src:"https://picsum.photos/100/100?random=35",title:"Italian Pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"}
]}/>

    </div>

    )
}

export default RecipeResult;