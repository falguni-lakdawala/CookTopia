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
											<button key={index + data.name} className="category-listing">
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
											<button key={index + data.name} className="subcategory-listing">
												<div className="img-cont">
													<img src={subcategoryFilterTipImage} alt="subcategory button image" />
												</div>
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
													<div className="img-cont">
														<img src={subcategoryFilterTipImage} alt="subcategory button image" />
													</div>
													<div className="text-cont">{data.name}</div>
													<div className="remove-selected-subcategory-cont">
														<button className="remove-selected-subcategory-btn">
															<i className="fa fa-times" aria-hidden="true"></i>
														</button>
													</div>
												</div>
											)
										})
									}
								</div>
								<div className="categories-clear-selected-cont">
									<button className="categories-clear-selected-btn">
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
