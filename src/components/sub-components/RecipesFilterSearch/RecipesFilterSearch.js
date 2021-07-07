import RecipeCard from "../RecipeCard";
import useFetch from "../../../custom_hooks/useFetch";
import categoryCuisineImage from "../../../assets/illustrations/recipe-filter-search/cuisine.svg";
import categoryDietTypesImage from "../../../assets/illustrations/recipe-filter-search/diet-types.svg";
import categoryIngredientsImage from "../../../assets/illustrations/recipe-filter-search/ingredients.svg";
import categoryAllergyImage from "../../../assets/illustrations/recipe-filter-search/allergy.svg";
import categoryMealTypeImage from "../../../assets/illustrations/recipe-filter-search/meal-type.svg";
import subcategoryFilterTipImage from "../../../assets/illustrations/recipe-filter-search/subcategory-filter-tip.svg";

const RecipesFilterSearch = () => {
  const url = "http://localhost:5000/recipes/random";
  let recipesData = useFetch(url, {});

	const categoriesData = [
		{
			name: 'Cuisine',
			imgURL: categoryCuisineImage
		},
		{
			name: 'Diet Types',
			imgURL: categoryDietTypesImage
		},
		{
			name: 'Ingredients',
			imgURL: categoryIngredientsImage
		},
		{
			name: 'Allergy',
			imgURL: categoryAllergyImage
		},
		{
			name: 'Meal Type',
			imgURL: categoryMealTypeImage
		}
	];

	// update this and update the DOM when main selected category is changed
	const subcategoriesData = [
		{
			name: 'Chicken'
		},
		{
			name: 'Dairy'
		},
		{
			name: 'Grains'
		},
		{
			name: 'Lamb'
		},
		{
			name: 'Noodles'
		},
	];

	const selectedSubcategoriesData = [
		{
			name: 'Lamb'
		},
		{
			name: 'Noodles'
		},
	];

  return (
    <>
      {!recipesData.loading && (
        <>
          <div className="rfs-filters-cont">
						<div className="max-width-cont">
							<div className="heading">Categories</div>
							<div className="categories-cont">
								{
									categoriesData.map((data, index) => {
										return (
											<button key={index + data.name} className="category-listing" type="button">
												<div className="img-cont">
													<img src={data.imgURL} alt="" />
												</div>
												<div className="text-cont">{data.name}</div>
											</button>
										)
									})
								}
							</div>
							<div className="subcategories-cont">
								{
									subcategoriesData.map((data, index) => {
										return (
											<button key={index + data.name} className="subcategory-listing"type="button">
												<svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M30.0032 44V0H17.3959H17.1972C16.1988 0.0507447 15.2565 0.470886 14.5581 1.17668L1.442 14.026C0.666977 14.7984 0.220496 15.834 0.193992 16.9207L0.00321309 25.5497C-0.0104057 26.1022 0.0864914 26.6519 0.288362 27.1675C0.490232 27.683 0.793114 28.1542 1.17968 28.5541L14.9317 42.7606C15.5811 43.4399 16.4549 43.8683 17.3959 43.9686L30.0032 44ZM14.5104 22.0353C14.5104 20.8996 14.8516 19.7894 15.491 18.8451C16.1304 17.9008 17.0391 17.1648 18.1024 16.7302C19.1656 16.2956 20.3356 16.1819 21.4643 16.4034C22.593 16.625 23.6298 17.1719 24.4436 17.975C25.2574 18.778 25.8116 19.8012 26.0361 20.9151C26.2606 22.0289 26.1454 23.1835 25.705 24.2327C25.2646 25.282 24.5187 26.1788 23.5619 26.8098C22.605 27.4407 21.48 27.7775 20.3291 27.7775C19.5623 27.7775 18.8031 27.628 18.095 27.3374C17.387 27.0469 16.7441 26.6211 16.2034 26.0846C15.6626 25.548 15.2347 24.9113 14.9441 24.211C14.6536 23.5107 14.5062 22.7606 14.5104 22.0039V22.0353Z" fill="#FB9400"/>
												</svg>
												<div className="text-cont">{data.name}</div>
											</button>
										)
									})
								}
							</div>
							<div className="categories-selected-cont">
								<div className="categories-selected-listing-cont">
									{
										selectedSubcategoriesData.map((data, index) => {
											return (
												<div key={index + data.name} className="subcategory-listing">
													<svg width="31" height="44" viewBox="0 0 31 44" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M30.0032 44V0H17.3959H17.1972C16.1988 0.0507447 15.2565 0.470886 14.5581 1.17668L1.442 14.026C0.666977 14.7984 0.220496 15.834 0.193992 16.9207L0.00321309 25.5497C-0.0104057 26.1022 0.0864914 26.6519 0.288362 27.1675C0.490232 27.683 0.793114 28.1542 1.17968 28.5541L14.9317 42.7606C15.5811 43.4399 16.4549 43.8683 17.3959 43.9686L30.0032 44ZM14.5104 22.0353C14.5104 20.8996 14.8516 19.7894 15.491 18.8451C16.1304 17.9008 17.0391 17.1648 18.1024 16.7302C19.1656 16.2956 20.3356 16.1819 21.4643 16.4034C22.593 16.625 23.6298 17.1719 24.4436 17.975C25.2574 18.778 25.8116 19.8012 26.0361 20.9151C26.2606 22.0289 26.1454 23.1835 25.705 24.2327C25.2646 25.282 24.5187 26.1788 23.5619 26.8098C22.605 27.4407 21.48 27.7775 20.3291 27.7775C19.5623 27.7775 18.8031 27.628 18.095 27.3374C17.387 27.0469 16.7441 26.6211 16.2034 26.0846C15.6626 25.548 15.2347 24.9113 14.9441 24.211C14.6536 23.5107 14.5062 22.7606 14.5104 22.0039V22.0353Z" fill="#FB9400"/>
													</svg>
													<div className="text-cont">{data.name}</div>
													{/* <div className="remove-selected-subcategory-cont">
														<button className="remove-selected-subcategory-btn" type="button">
															<i className="fa fa-times" aria-hidden="true"></i>
														</button>
													</div> */}
												</div>
											)
										})
									}
								</div>
								<div className="categories-clear-selected-cont">
									<button className="categories-clear-selected-btn" type="button">
										Clear All
									</button>
								</div>
							</div>
						</div>
          </div>
          <div className="rfs-recipes-list-cont">
						<div className="max-width-cont">
							<div className="heading">Popular Recipes</div>
							<div className="listing-cont">
								{
									recipesData.response.recipes.map((data, index) => {
										return <RecipeCard key={index} recipeData={data} />;
									})
								}
							</div>
						</div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipesFilterSearch;
