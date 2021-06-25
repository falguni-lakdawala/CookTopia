import React from 'react'

const RecipeContentDetails = () => {
	const recipeContentDetailsData =
	{
		cookTime: '1 hr 40 mins',
		servings: 6,
		ingredientsData: [
			{
				id: 1,
				text: '2 cups dried gigantes or large lima beans'
			},
			{
				id: 2,
				text: '2 tablespoons olive oil'
			},
			{
				id: 3,
				text: '1 medium onion chopped'
			},
			{
				id: 4,
				text: '2 large cloves garlic minced'
			},
			{
				id: 5,
				text: '1 large jalapeno, seeded and chopped or 1.14 oz (400 mL) can chopped tomatoes'
			},
			{
				id: 6,
				text: '5 to 6 cups of water'
			},
			{
				id: 7,
				text: '5 1/2 oz (156 mL) canned tomato paste'
			},
			{
				id: 8,
				text: '2 teaspoons dried Greek oregano'
			}
		]
	}

	return (
		<div className="recipe-details">
			<div className="cook-time-cont">
				<div className="label">Cook Time:</div>
				<div className="time-text">{recipeContentDetailsData.cookTime}</div>
			</div>
			<div className="portion-cont">
				<div className="label">Portion:</div>
				<div className="time-text">{recipeContentDetailsData.servings} servings</div>
			</div>
			<div className="ingredients-cont">
				<div className="label">Ingredients:</div>
				<div className="ingredients-listings-cont">
				{
					recipeContentDetailsData.ingredientsData.map(
						(data) =>
							<div key={data.key} className="ingredient-listing">
								<input type="checkbox" className="ingredient-checkbox" checked />
								<div className="ingredient-text">
									{data.text}
								</div>
							</div>
						)
				}
				</div>
				<div className="add-to-shopping-list-btn-cont">
					<button type="button" className="add-to-shopping-list-btn">Add to Shopping List</button>
				</div>
			</div>
		</div>
	)
}

export default RecipeContentDetails
