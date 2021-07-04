import React from 'react'

const RecipeContentMainInstructions = ({recipeData}) => {
	console.log(recipeData)
	const nutritionData=recipeData.nutrition.nutrients
	const recipeContentMainInstructionsData = {
		totalCalories: '2200 Kcal',
		instructionsTextData: [
			{
				id: 1,
				heading: 'Heat pasta water',
				text: 'Rinse the gigantes or lima beans and soak in several inches of water for 8 hours or overnight. Drain and rinse.'
			},
			{
				id: 2,
				heading: 'Beat eggs and half of the cheese',
				text: 'In a small bowl, beat the eggs and mix in about half of the cheese.'
			},
			{
				id: 3,
				heading: 'Cook paste',
				text: 'Once the water has reached a rolling boil, add the dry pasta, and cook, uncovered, at a rolling boil.'
			},
		]
	}

	return (
		<div className="recipe-instructions-cont">
			<div className="instructions-graph-cont">
				<div className="instructions-cont-graph">
					<div className="dummy"></div>
				</div>
			</div>
			<div className="instructions-total-calories-cont">
				<div className="instructions-total-calories-box">
					<div className="label">Total Calories</div>
					<div className="instructions-total-calories-text">{nutritionData[0].amount+" "+nutritionData[0].unit}</div>
				</div>
			</div>
			<div className="recipe-instructions-text-cont">
				<ol>
					{
						recipeContentMainInstructionsData.instructionsTextData.map(
							(data, index) =>
								<li key={index}>
									<div className="instructions-text-heading">{data.heading}</div>
									<div className="instructions-text-text">{data.text}</div>
								</li>
							)
					}
				</ol>
			</div>
		</div>
	)
}

export default RecipeContentMainInstructions
