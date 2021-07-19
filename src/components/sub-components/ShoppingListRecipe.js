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

  if (user) {
    const selectedRecipes = useFetch(
      `http://44.238.74.165:3000/recipecartlist/${user.uid}`,
      {}
    );

    if (!selectedRecipes.loading) {
      recipes = selectedRecipes.response;
    }



    const shoppingListData = [
      {
        src: "https://picsum.photos/250/250?random=4",
        title: "pasta",
        cooking_time: "45 minutes",
        category: "vegetables",
        alt: "image",
        ingredients: [
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
        ],
      },
      {
        src: "https://picsum.photos/250/250?random=6",
        title: "chicken Pizza",
        cooking_time: "120 minutes",
        category: "Non-veg",
        alt: "image",
        ingredients: [
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: true,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: true,
          },
        ],
      },
      {
        src: "https://picsum.photos/250/250?random=8",
        title: "chicken Biryani",
        cooking_time: "100 minutes",
        category: "veg",
        alt: "image",
        ingredients: [
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: false,
          },
          {
            text: "4 medium portobello mushrooms, stems removed",
            selected: true,
          },
        ],
      },
      {
        src: "https://picsum.photos/250/250?random=5",
        title: "Italian Pasta",
        cooking_time: "45 minutes",
        category: "vegetables",
        alt: "image",
        ingredients: [
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: true,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: false,
          },
          {
            text: "2 cups dried gigantes or large lime beans",
            selected: true,
          },
        ],
      },
    ];

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

    return (
      <>
        {recipes && (
          <div className="shopping-list-page-cont">
            <div className="max-width-cont">
              <div className="selected-recipes-cont">
                <div className="heading">
                  <h3>Recipes you selected</h3>
                </div>
                <div className="selected-recipes-listing-cont">
                  {recipes.map((data, index) => {
                    return (
                      <Images
                        key={data.imageURL.toString() + index}
                        src={data.imageURL}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="shopping-list-cont">
                <div className="heading-cont">
                  <div className="heading">
                    <h3>Your Shopping List</h3>
                  </div>

                  <Button text="Clear All" />

                  {shoppingListData.length > 0 ? (
                    <button>Clear All</button>
                  ) : (
                    ""
                  )}

                </div>
                <div className="shopping-list-listing-cont">
                  <ShoppingCard
                    recipeClassName="shopping_cardlist"
                    recipes={recipes}
                  ></ShoppingCard>
                </div>

                {/* <Button text="Record the List" /> */}

                {shoppingListData.length > 0 ? (
                  <div className="shopping-list-listing-cont">
                    <ShoppingCard
                      recipeClassName="shopping_cardlist"
                      recipes={shoppingListData}
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
                  <Button text="Search nearby shop" />
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
  } else {
    return (
      // U
      <p>Not logged in</p>
    );
  }
};

export default ShoppingListRecipe;
