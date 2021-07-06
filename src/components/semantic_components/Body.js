import React from "react";
import Recipes from "../sub-components/Home/Recipes";
import RecipeResult from "../sub-components/RecipeResult";
import ShoppingListRecipe from "../sub-components/ShoppingListRecipe";
import Blindbox from "../sub-components/Home/Blindbox";
import Features from "../sub-components/Home/Features";
import ContactForm from "../sub-components/ContactForm";
import RecipeContent from "../sub-components/Recipes/RecipeContent";
import RecipesFilterSearch from "../sub-components/RecipesFilterSearch/RecipesFilterSearch";
import { useLocation } from "react-router-dom";
import Login from "../sub-components/Loginandsignup/Login";
import Team from "../sub-components/Team/Team";
import Signup from "../sub-components/Loginandsignup/Signup";
import Profile from "../sub-components/Profile/Profile";

const Body = () => {
  const location = useLocation();
  const props1 = {
    style: { outlineColor: "blue" },
    placeholder: "Subject",
    title: "Subject",
  };
  const props2 = {
    style: { outlineColor: "blue" },
    placeholder: "Name",
    title: "Name",
  };
  const props3 = {
    style: { outlineColor: "blue" },
    placeholder: "Email",
    title: "Email",
  };

  return (
    // Routes will be defined here
    <>
      <main role="main" className="app_body">
        {location.pathname === "/home" && (
          <>
            <Blindbox />
            <Recipes />
            <Features features={[1, 2, 3]} />
            <ContactForm
              input_number={[
                [1, props1],
                [2, props2],
                [3, props3],
              ]}
            />
          </>
        )}
        {location.pathname === "/" && (
          <>
            <Login />
          </>
        )}
        {location.pathname === "/search" && (
          <>
            <RecipeResult />
          </>
        )}
        {location.pathname === "/shoppinglist" && (
          <>
            <ShoppingListRecipe />
          </>
        )}
        {location.pathname === "/recipes" && (
          <>
            <RecipesFilterSearch />
          </>
        )}
        {location.pathname === "/team" && (
          <>
            <Team />
          </>
        )}

        {location.pathname === "/signup" && <Signup />}

        {location.pathname === "/profile" && <Profile />}
      </main>
    </>
  );
};

export default Body;
