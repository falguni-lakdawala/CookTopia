import RecipeCard from "../RecipeCard";
import useFetch from "../../../custom_hooks/useFetch";
import categoryCuisineImage from "../../../assets/illustrations/recipe-filter-search/cuisine.svg";
import categoryDietTypesImage from "../../../assets/illustrations/recipe-filter-search/diet-types.svg";
import categoryIngredientsImage from "../../../assets/illustrations/recipe-filter-search/ingredients.svg";
import categoryAllergyImage from "../../../assets/illustrations/recipe-filter-search/allergy.svg";
import categoryMealTypeImage from "../../../assets/illustrations/recipe-filter-search/meal-type.svg";
import Subcategory from "./Subcategory";
import { useRef, useState } from "react";

const RecipesFilterSearch = () => {
  const url = "http://44.238.74.165:3000/recipes/random?number=20";
  let recipesData = useFetch(url, {});

  const recipes = useRef([]);

  const [selectedcategory, Setselectedcategory] = useState("Cuisine");

  const [subcategory, setSubcategory] = useState([]);

  if (!recipesData.loading) {
    recipes.current = recipesData.response.recipes;
  }
  const categoriesData = [
    {
      name: "Cuisine",
      imgURL: categoryCuisineImage,
      actionClick: () => {
				if (subcategory === subcategories.current[0].cuisine) {
					if (document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing")[0].classList.contains('active')) {
						setSubcategory([]);
					}
				} else {
					setSubcategory(subcategories.current[0].cuisine);
				}
        setSubcategoryStyle(0);
      },
      actionMouseEnter: () => {
        setSubcategory(subcategories.current[0].cuisine);
      },
      actionMouseLeave: () => {
        setSubcategory([]);
      },
    },
    {
      name: "Diet Types",
      imgURL: categoryDietTypesImage,
      actionClick: () => {
				if (subcategory === subcategories.current[1].diet) {
					if (document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing")[1].classList.contains('active')) {
						setSubcategory([]);
					}
				} else {
					setSubcategory(subcategories.current[1].diet);
				}
        setSubcategoryStyle(1);
      },
      actionMouseEnter: () => {
        setSubcategory(subcategories.current[1].diet);
      },
      actionMouseLeave: () => {
        setSubcategory([]);
      },
    },
    {
      name: "Ingredients",
      imgURL: categoryIngredientsImage,
      actionClick: () => {
				if (subcategory === subcategories.current[2].ingredient) {
					if (document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing")[2].classList.contains('active')) {
						setSubcategory([]);
					}
					setSubcategory([]);
				} else {
					setSubcategory(subcategories.current[2].ingredient);
				}
        setSubcategoryStyle(2);
      },
      actionMouseEnter: () => {
        setSubcategory(subcategories.current[2].ingredient);
      },
      actionMouseLeave: () => {
        setSubcategory([]);
      },
    },
    {
      name: "Allergy",
      imgURL: categoryAllergyImage,
      actionClick: () => {
				if (subcategory === subcategories.current[3].intolerances) {
					if (document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing")[3].classList.contains('active')) {
						setSubcategory([]);
					}
				} else {
					setSubcategory(subcategories.current[3].intolerances);
				}
        setSubcategoryStyle(3);
      },
      actionMouseEnter: () => {
        setSubcategory(subcategories.current[3].intolerances);
      },
      actionMouseLeave: () => {
        setSubcategory([]);
      },
    },
    {
      name: "Meal Type",
      imgURL: categoryMealTypeImage,
      actionClick: () => {
				if (subcategory === subcategories.current[4].mealtype) {
					if (document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing")[4].classList.contains('active')) {
						setSubcategory([]);
					}
				} else {
					setSubcategory(subcategories.current[4].mealtype);
				}
        setSubcategoryStyle(4);
      },
      actionMouseEnter: () => {
        setSubcategory(subcategories.current[4].mealtype);
      },
      actionMouseLeave: () => {
        setSubcategory([]);
      },
    },
  ];

  const subcategories = useRef([
    {
      cuisine: [
        "Chinese",
        "French",
        "Indian",
        "Italian",
        "Japanese",
        "Korean",
        "Mexican",
        "Persian",
        "Thai",
        "Vietnamese",
      ],
    },
    {
      diet: [
        "Gluten free",
        "Ketogenic",
        "Paleo",
        "Pescetarian",
        "Primal",
        "Vegan",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Whole30",
      ],
    },
    {
      ingredient: [
        "Beef",
        "Chicken",
        "Dairy",
        "Grains",
        "Lamb",
        "Noodles",
        "Plant based protein",
        "Pork",
        "Seafood",
        "Vegetables",
      ],
    },
    {
      intolerances: [
        "Egg",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat",
      ],
    },
    { mealtype: ["Appetizers", "Breakfast", "Lunch", "Dinner", "Soup"] },
  ]);

  const setSubcategoryStyle = (id) => {
    document.querySelectorAll(".rfs-filters-cont .categories-cont .category-listing").forEach((el, index) => {
			if (id === index) {
				el.classList.toggle("active");
			} else {
				el.classList.remove("active");
			}
		});
  };

	const setActiveNavLink = () => {
    let pageURL = window.location.pathname.substring(1);
		let links = document.querySelectorAll('.app_header nav ul li a');
		links.forEach(el => {
			if (pageURL === el.getAttribute('href').substring(1)) {
				el.classList.add('active');
			} else {
				el.classList.remove('active');
			}
		});
  };
	setActiveNavLink();

  return (
    <>
      {!recipesData.loading && (
        <>
          <div className="rfs-filters-cont">
            <div className="max-width-cont">
              <div className="heading">Categories</div>
              <div className="categories-cont">
                {categoriesData.map((data, index) => {
                  return (
                    <button
                      onClick={() => {
                        data.actionClick();
                        Setselectedcategory(data.name);
                      }}
                      onMouseEnter={() => {
												let selectedCategory = document.querySelectorAll('.rfs-filters-cont .categories-cont .category-listing.active');
												if (selectedCategory.length === 0) {
													data.actionMouseEnter();
												}
                      }}
                      onMouseLeave={() => {
												let selectedCategory = document.querySelectorAll('.rfs-filters-cont .categories-cont .category-listing.active');
												if (selectedCategory.length === 0) {
													data.actionMouseLeave();
												}
                      }}
                      key={index + data.name}
                      className="category-listing"
                      type="button"
                    >
                      <div className="img-cont">
                        <img src={data.imgURL} alt="" />
                      </div>
                      <div className="text-cont">{data.name}</div>
                    </button>
                  );
                })}
              </div>
              <Subcategory
                subcategory={subcategory}
                categorytype={selectedcategory}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipesFilterSearch;
