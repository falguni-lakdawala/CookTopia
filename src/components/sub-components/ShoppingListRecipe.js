

import React from 'react'
import Recipecard from './Recipecard'
import Button from '../composable-components/Button'
import ShoppingCard from './ShoppingCard'

const ShoppingListRecipe = () => {

    return(

        <div>
            <div className="recipes">
                <h3>Recipes you selected</h3>
            <Recipecard showCategory='false' showTime='false' recipeClassName="recipe_result" recipes={[{src:"https://picsum.photos/100/100?random=4",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
            {src:"https://picsum.photos/100/100?random=6",title:"chicken Pizza",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
            {src:"https://picsum.photos/100/100?random=8",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"},
            {src:"https://picsum.photos/100/100?random=5",title:"Italian Pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"}
            ]}/>

        </div>

        <div className="shoppingList">
            <h3>Your Shopping List</h3>
            <Button text="Clear All Lists"/>

            <ShoppingCard recipeClassName="shopping_cardlist" recipes={[
            {src:"https://picsum.photos/100/100?random=4",title:"pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"},
            {src:"https://picsum.photos/100/100?random=6",title:"chicken Pizza",cooking_time:"120 minutes",category:"Non-veg",alt:"image"},
            {src:"https://picsum.photos/100/100?random=8",title:"chicken Biryani",cooking_time:"100 minutes",category:"veg",alt:"image"},
            {src:"https://picsum.photos/100/100?random=5",title:"Italian Pasta",cooking_time:"45 minutes",category:"vegetables",alt:"image"}
            ]}></ShoppingCard>

            <br></br>

            <Button text="Record the List"/>
            
        </div>

        <div className="groceryshop">
            <h3>Find the nearby grocery shop</h3>

            <input type="text" placeholder="Enter postal code here"/>
            <Button text="Search nearby Shop"/>

            <div className="mapcontainer">
                container for Map
            </div>
        </div>

        </div>
    
   

    )
}

export default ShoppingListRecipe;