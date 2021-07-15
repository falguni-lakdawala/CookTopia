import RecipeCard from "../RecipeCard";
import useFetch from "../../../custom_hooks/useFetch";
import categoryCuisineImage from "../../../assets/illustrations/recipe-filter-search/cuisine.svg";
import categoryDietTypesImage from "../../../assets/illustrations/recipe-filter-search/diet-types.svg";
import categoryIngredientsImage from "../../../assets/illustrations/recipe-filter-search/ingredients.svg";
import categoryAllergyImage from "../../../assets/illustrations/recipe-filter-search/allergy.svg";
import categoryMealTypeImage from "../../../assets/illustrations/recipe-filter-search/meal-type.svg";
import Subcategory from "./Subcategory";
import { useRef, useState } from 'react'

const RecipesFilterSearch = () => {
	const url = "http://44.238.74.165:5000/recipes/random?number=20";
	let recipesData = useFetch(url, {});

	const recipes = useRef([])

	const [selectedcategory, Setselectedcategory] = useState("Cuisine");

	const [subcategory, setSubcategory] = useState([
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
	]);

	if (!recipesData.loading) {
		recipes.current = recipesData.response.recipes
	}
	const categoriesData = [
		{
			name: "Cuisine",
			imgURL: categoryCuisineImage,
			action: () => {
				setSubcategory((subcategories.current)[0].cuisine)
			},
		},
		{
			name: "Diet Types",
			imgURL: categoryDietTypesImage,
			action: () => { setSubcategory((subcategories.current)[1].diet); },
		},
		{
			name: "Ingredients",
			imgURL: categoryIngredientsImage,
			action: () => { setSubcategory(subcategories.current[2].ingredient); },
		},
		{
			name: "Allergy",
			imgURL: categoryAllergyImage,
			action: () => { setSubcategory(subcategories.current[3].intolerances) }
		},
		{
			name: "Meal Type",
			imgURL: categoryMealTypeImage,
			action: () => { setSubcategory(subcategories.current[4].mealtype); },
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
	])

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
												data.action()
												Setselectedcategory(data.name)
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
							<Subcategory subcategory={subcategory} categorytype={selectedcategory} />
							<div className="categories-selected-cont">

								<div className="categories-clear-selected-cont">
									<button
										className="categories-clear-selected-btn"
										type="button"
									>
										Clear All
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="rfs-recipes-list-cont">

					</div>
				</>
			)}
		</>
	);
};

export default RecipesFilterSearch;
