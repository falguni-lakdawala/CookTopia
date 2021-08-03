import React, { useState, useRef } from "react";
import Button from "../composable-components/Button";
import ShoppingCard from "./ShoppingCard";
import findStoreImage from "../../assets/illustrations/shopping-list/find-store.svg";
import emptyShoppingListImage from "../../assets/illustrations/shopping-list/empty-shopping-list.svg";
import useFetch from "../../custom_hooks/useFetch";
import { Link } from "react-router-dom";

const ShoppingListRecipe = () => {
  let recipes;
  const [recipe, setRecipe] = useState([]);
  const [shoppinglist, setShoppinglist] = useState([]);
  let init = false;
  let selectedRecipes = true;

  const deleted = useRef({ deleted: false });

  const user = JSON.parse(window.sessionStorage.getItem("user"));

  // Deleting shopping list recipe
  // Deleting shopping list recipe

  const handledelete = (e, data) => {
    init = true;
    deleted.current = { deleted: true };
    setRecipe(recipe.filter((f) => f.uniqueID !== data.uniqueID));
    setShoppinglist(shoppinglist.filter((f) => f.uniqueID !== data.uniqueID));

    if (!user) {
      console.log(recipe);
      const prevshop = JSON.parse(
        window.sessionStorage.getItem("guestshoppingdata")
      );
      window.sessionStorage.setItem(
        "guestshoppingdata",
        JSON.stringify(shoppinglist)
      );
    }
    // Delete from database.

    if (user) {
      const deletefromDB = () => {
        fetch(`http://44.238.74.165:3000/recipecart/deleterecipecart`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            recipeID: data.recipeID,
            userID: data.userID,
          }),
        })
          .then((r) => r.json())
          .then((d) => {
            // console.log("Deleted")
          });
      };
      deletefromDB();
    }
  };

  if (user) {
    selectedRecipes = useFetch(
      `http://44.238.74.165:3000/recipecartlist/${user.uid}`,
      {}
    );

    if (!selectedRecipes.loading) {
      recipes = selectedRecipes.response;
      // console.log(recipes);
      if (
        recipe.length === 0 &&
        !init &&
        recipes.length > 0 &&
        !deleted.current.deleted
      ) {
        setRecipe(recipes);
        setShoppinglist(recipes);
      }
    }
  }

  if (!user) {
    const guestshoppinglist = JSON.parse(
      window.sessionStorage.getItem("guestshoppingdata")
    );
    if (guestshoppinglist) {
      recipes = guestshoppinglist;
      if (recipe.length === 0 && !deleted.current.deleted) {
        setRecipe(recipes);
        setShoppinglist(recipes);
      }
    } else {
      recipes = [];
    }
  }

  // Function to update order of shopping list

  const updateOrder = (data, index) => {
    if (shoppinglist.length > 0) {
      const updatearray = [
        data,
        ...shoppinglist.filter((f) => f.uniqueID !== data.uniqueID),
      ];
      setShoppinglist(updatearray);
    }
  };

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
    document
      .querySelectorAll(
        ".selected-recipes-cont .selected-recipes-listing-cont .selected-recipes-listing"
      )
      .forEach((el, i) => {
        if (i === index) {
          document
            .getElementById("selected-recipes-listing-" + i)
            .classList.toggle("active");
        } else {
          document
            .getElementById("selected-recipes-listing-" + i)
            .classList.remove("active");
        }
      });
  };

  return (
    <>
      <div className="shopping-list-page-cont">
        <div className="max-width-cont">
          <div className="selected-recipes-cont">
            <div className="heading">
              <h3>Recipes you selected</h3>
            </div>
            <div className="selected-recipes-listing-cont">
              {recipe.length > 0 ? (
                recipe.map((data, index) => {
                  return (
                    <div
                      id={"selected-recipes-listing-" + index}
                      className="selected-recipes-listing"
                      key={data.uniqueID + index + "div"}
                      onClick={() => selectActiveRecipe(index)}
                    >
                      {data.imageURL ? (
                        <img
                          loading="lazy"
                          key={data.imageURL.toString() + index}
                          src={data.imageURL}
                          onClick={() => updateOrder(data, index)}
                        />
                      ) : (
                        <>
                          <img alt="No image found" />
                        </>
                      )}
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="no-recipes-found">
                    {/* Add whatever to be shown when no recipes selected! */}
                    <p>No recipes in your shopping list!!!</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="shopping-list-cont">
            <div className="heading-cont">
              <div className="heading">
                <h3>Your Shopping List</h3>
              </div>
              {recipe.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const url = `http://44.238.74.165:3000/recipecart/deleteallrecipes`;
                      const deleteAll = fetch(url, {
                        method: "DELETE",
                        headers: {
                          "Content-type": "application/json",
                        },
                        body: JSON.stringify({ userID: user.uid }),
                      })
                        .then((r) => r.json())
                        .then((d) => {
                          deleted.current = { deleted: true };
                          setRecipe([]);
                          setShoppinglist([]);
                        });
                    }}
                  >
                    Clear all
                  </button>
                </>
              )}
            </div>

            {shoppinglist.length > 0 ? (
              <div className="shopping-list-listing-cont">
                <ShoppingCard
                  recipeClassName="shopping_cardlist"
                  recipes={shoppinglist}
                  onclick={handledelete}
                ></ShoppingCard>
              </div>
            ) : (
              <div className="no-shopping-list-cont">
                <img
                  src={emptyShoppingListImage}
                  alt="Favorite shopping list"
                />
                <Link to="/recipes">
                  <button type="button">Browse Recipes</button>
                </Link>
              </div>
            )}
          </div>
          <div className="grocery-shop-cont display-none">
            <div className="heading">
              <h3>Find the nearby grocery shop</h3>
            </div>
            <div className="search-container">
              <input type="text" placeholder="Enter postal code here" />
              {<Button text="Search nearby shop" />}
            </div>
            <div className="map-cont">
              <img src={findStoreImage} alt="find store image" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingListRecipe;
