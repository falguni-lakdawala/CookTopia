import React from "react";
import Button from "../composable-components/Button";
import ShoppingCard from "./ShoppingCard";
import findStoreImage from "../../assets/illustrations/shopping-list/find-store.svg";
import useFetch from "../../custom_hooks/useFetch";
import Images from '../composable-components/Images'

const ShoppingListRecipe = () => {
 let recipes;

const user=JSON.parse(window.sessionStorage.getItem('user'))


if(user){
const selectedRecipes = useFetch(
  `http://44.238.74.165:3000/recipecartlist/${user.uid}`,
  {}
);

if(!(selectedRecipes.loading)){

 recipes=selectedRecipes.response;

}

  return (
    <>
    {(recipes)&&
    <div className="shopping-list-page-cont">
      <div className="max-width-cont">
        <div className="selected-recipes-cont">
          <div className="heading">
            <h3>Recipes you selected</h3>
          </div>
					<div className="selected-recipes-listing-cont">
						{(recipes).map((data, index) => {
              return <Images key={data.imageURL.toString()+index} src={data.imageURL}/>
						})}
					</div>
        </div>
        <div className="shopping-list-cont">
					<div className="heading-cont">
						<div className="heading">
							<h3>Your Shopping List</h3>
						</div>
						<Button text="Clear All" />
					</div>
					<div className="shopping-list-listing-cont">
						<ShoppingCard
							recipeClassName="shopping_cardlist"
							recipes={recipes}
						></ShoppingCard>
					</div>
          {/* <Button text="Record the List" /> */}
        </div>
        <div className="grocery-shop-cont">
					<div className="heading">
          	<h3>Find the nearby grocery shop</h3>
					</div>
					<div className="search-container">
          	<input type="text" placeholder="Enter postal code here" />
          	<Button text="Search nearby shop" />
					</div>
          <div className="map-cont">
							<img src={findStoreImage} alt="find store image" loading='lazy'/>
					</div>
        </div>
      </div>
    </div>
}
  </>
  );
            }else{
              return(
                // U
                <p>Not logged in</p>
              )
            }
};

export default ShoppingListRecipe;
