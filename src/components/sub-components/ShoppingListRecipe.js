import React from "react";
import Button from "../composable-components/Button";
import ShoppingCard from "./ShoppingCard";
import findStoreImage from "../../assets/illustrations/shopping-list/find-store.svg";
import emptyShoppingListImage from "../../assets/illustrations/shopping-list/empty-shopping-list.svg";
import useFetch from "../../custom_hooks/useFetch";
import Images from "../composable-components/Images";

const ShoppingListRecipe = () => {
  let recipes;

  const user = JSON.parse(window.sessionStorage.getItem("user"));


// Deleting shopping list recipe
const handledelete=(e,data)=>{
console.log(data)
console.log(e)


// Delete from
// const deleterecipe = fetch(
//   `http://44.238.74.165:3000/recipecart/deleterecipecart`,{
//     method:'DELETE',
//     headers:{
//       'Content-Type':'application/json'
//     },
//     body:JSON.stringify({recipeID:data.recipeID,userID:data.userID})
//   }
// );

}

  if (user) {
    const selectedRecipes = useFetch(
      `http://44.238.74.165:3000/recipecartlist/${user.uid}`,
      {}
    );

    if (!selectedRecipes.loading) {
      recipes = selectedRecipes.response;
      console.log(recipes);
    }
    }

    if(!user){
      const guestshoppinglist=JSON.parse(window.sessionStorage.getItem('guestshoppingdata'))
      if(guestshoppinglist){
        recipes=guestshoppinglist
      }else{
        recipes=[]
               
      }
    }

    const setActiveNavLink = () => {
      let pageURL = window.location.pathname.substring(1);
      let links = document.querySelectorAll(".app_header nav ul li a");
      links.forEach((el) => {
        if (pageURL === el.getAttribute("href").substring(1)) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
    setActiveNavLink();

		const selectActiveRecipe = (index) => {
			document.querySelectorAll('.selected-recipes-cont .selected-recipes-listing-cont .selected-recipes-listing').forEach((el, i) => {
				if (i === index) {
					document.getElementById('selected-recipes-listing-' + i).classList.toggle('active');
				} else {
					document.getElementById('selected-recipes-listing-' + i).classList.remove('active');
				}
			});
		}

    return (
      <>
        {(recipes)&& (
          <div className="shopping-list-page-cont">
            <div className="max-width-cont">
              <div className="selected-recipes-cont">
                <div className="heading">
                  <h3>Recipes you selected</h3>
                </div>
                <div className="selected-recipes-listing-cont">
                  {recipes.length>0?recipes.map((data, index) => {
                    return (
                      <div
												id={'selected-recipes-listing-' + index}
												className="selected-recipes-listing"
												key={data.imageURL.toString() + index + 'div'}
												onClick={() => selectActiveRecipe(index)}
											>
                        <Images
                          key={data.imageURL.toString() + index}
                          src={data.imageURL}
                        />
                      </div>
                    );
                  }):
                  <>
                  <div className="no-recipes-found">
                    {/* Add whatever to be shown when no recipes selected! */}
                    <p>No recipes in your shopping list!!!</p>
                  </div>
                  </>}
                </div>
              </div>
              <div className="shopping-list-cont">
                <div className="heading-cont">
                  <div className="heading">
                    <h3>Your Shopping List</h3>
                  </div>
{recipes.length>0&&
                  <Button text="Clear All" />
}
                </div>

                {recipes.length > 0 ? (
                  <div className="shopping-list-listing-cont">
                    <ShoppingCard
                      recipeClassName="shopping_cardlist"
                      recipes={recipes}
                      onclick={handledelete}
                    ></ShoppingCard>
                  </div>
                ) : (
                  <div className="empty-shopping-list">
                    <img
                      src={emptyShoppingListImage}
                      alt="empty shopping list image"
                    />
                  </div>
                )}
              </div>
              <div className="grocery-shop-cont">
                <div className="heading">
                  <h3>Find the nearby grocery shop</h3>
                </div>
                <div className="search-container">
                  <input type="text" placeholder="Enter postal code here" />
                  {<Button text="Search nearby shop" />}
                </div>
                <div className="map-cont">
                  <img
                    src={findStoreImage}
                    alt="find store image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
<<<<<<< HEAD
=======
  } else {
    return <p>Not logged in</p>;
  }
>>>>>>> 28107663d7b6c5b2582d601786148eb21db906f8
};

export default ShoppingListRecipe;
