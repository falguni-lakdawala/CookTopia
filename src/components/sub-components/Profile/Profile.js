import RecipeCard from "../RecipeCard";
import editicon from "../../../assets/icons/editicon.svg";
import favrecipe from "../../../assets/illustrations/homepage-features/favouriterecipe-not-found.svg";
import emptyShoppingListImage from "../../../assets/illustrations/profile-page/shoppinglist-not-found.svg";
import useFetch from "../../../custom_hooks/useFetch";
import Checkbox from "../../composable-components/Checkbox";
import { useState } from "react";

const ProfileCard = () => {
  const user = JSON.parse(window.sessionStorage.getItem("user"));
  let results;
  let shoppingListData;
  let favRecipesData;
  let shopping;
  const [favorites, setFavorites] = useState([]);

  const handledislike = (data) => {
    const url = `http://44.238.74.165:3000/recipe/updaterecipedislike`;

    const updateDisLike = async () => {
      const updatedislike = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ recipeID: data.id, userID: user.id }),
      });

      const data = await updateDisLike.json();
      console.log(data);
    };
  };

  const addRecipeDeleteOverlay = (id) => {
    document.querySelector(`#${id}`).classList.add("active");
  };

  const removeRecipeDeleteOverlay = (id) => {
    document.querySelector(`#${id}`).classList.remove("active");
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

  if (user) {
    results = useFetch(
      `http://44.238.74.165:3000/recipe/getfavoriterecipes/${user.uid}`
    );

    shopping = useFetch(`http://44.238.74.165:3000/recipecartlist/${user.uid}`);
    if (!shopping.loading) {
      shoppingListData = shopping.response;
    }
    if (!results.loading) {
      console.log(results);
      favRecipesData = results.response;
      if (favorites.length === 0) {
        setFavorites(favRecipesData);
      }
    }
  }

  if (user && favorites.length > 0) {
    return (
      <div className="profile-cont">
        <div className="max-width-cont">
          <div className="profile-card">
            <div className="profile-image-cont">
              <img src={user.photoURL} alt="profile image" />
              {/* <button
                role="button"
                aria-label="profile image"
                title="edit image"
                type="button"
                className="edit-profile-image-btn"
              >
                Edit Image
              </button> */}
            </div>
            <div className="profile-data-cont">
              <div className="profile-data">
                <div className="name">{user.displayName}</div>
                <div className="email-cont">
                  <div className="label">Email: </div>
                  <div className="text">{user.email}</div>
                </div>
              </div>
              <div className="profile-edit-btn-cont">
                <button className="profile-edit-btn">
                  <img src={editicon} alt="edit icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="favorite-recipes-cont">
            <div className="heading">
              <h2>Favorite Recipes</h2>
              <div className="favorite-recipes-edit-cont">
                <button className="favorite-recipes-edit-btn" type="button">
                  Edit
                </button>
              </div>
            </div>
            {favorites.length > 0 ? (
              <div className="favorite-recipes-listing-cont">
                {favorites.map((data, index) => (
                  <div key={data.id}>
                    <div
                      className="recipe-card-cont"
                      onMouseEnter={() =>
                        addRecipeDeleteOverlay(
                          `remove-favorite-recipe-${index}`
                        )
                      }
                      onMouseLeave={() =>
                        removeRecipeDeleteOverlay(
                          `remove-favorite-recipe-${index}`
                        )
                      }
                    >
                      <RecipeCard recipeData={data} />
                      <div
                        id={`remove-favorite-recipe-${index}`}
                        className="recipe-card-overlay"
                      >
                        <div className="text">Remove</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-favorite-recipes-cont">
                <img src={favrecipe} alt="Favorite recipe illustration" />
                <button type="button">Search more recipes</button>
              </div>
            )}
          </div>
          <div className="shopping-list-cont">
            <div className="heading">
              <h2>Your Shopping List</h2>
            </div>
            <div className="shopping-list-listing-cont">
              {!shopping.loading && shoppingListData.length > 0 ? (
                shoppingListData.map((data, index) => {
                  return (
                    <div key={index} className="shopping-list-listing">
                      <div className="img-and-remove-list-cont">
                        <div className="img-cont">
                          <img src={data.imageURL} alt={data.name} />
                        </div>
                        <div className="remove-list-cont">
                          <button type="button" className="remove-list-btn">
                            remove list
                          </button>
                        </div>
                      </div>
                      <div className="ingredients-cont">
                        {data.ingredients.map((dataInner, index) => {
                          return (
                            <div key={index} className="ingredient-cont">
                              <div className="checkbox">
                                <Checkbox
                                  role="checkbox"
                                  ariaLabel="Checkbox"
                                  type="checkbox"
                                  className={"ingredient-checkbox"}
                                  defaultChecked={dataInner.selected}
                                />
                              </div>
                              <div className="text">
                                {dataInner.ingredientName}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-shopping-list-cont">
                  <img
                    src={emptyShoppingListImage}
                    alt="Favorite shopping list"
                  />
                  <button type="button">Search your shopping list</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (user && results.loading) {
    return (
      <div className="loading">
        <p>Loading... </p>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="no-user">
        <p>User not logged in !!!! </p>
      </div>
    );
  }
};

export default ProfileCard;
