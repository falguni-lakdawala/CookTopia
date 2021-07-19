import Checkbox from "../../composable-components/Checkbox";

const RecipeContentDetails = ({ recipeData }) => {

	return (
		<>
			<div className="recipe-details">
				<div className="cook-time-cont">
					<div className="label">Cook Time:</div>
					<div className="text">{recipeData.readyInMinutes} mins</div>
				</div>
				<div className="portion-cont">
					<div className="label">Portion:</div>
					<div className="text">{recipeData.servings} servings</div>
				</div>
				<div className="ingredients-cont">
					<div className="label">Ingredients:</div>
					<div className="ingredients-listings-cont">
						{recipeData.extendedIngredients.map((data, index) => (
							<div key={index} className="ingredient-listing">
								<Checkbox
									role="checkbox"
									ariaLabel="Checkbox"
									type="checkbox"
									className={"ingredient-checkbox"}
									defaultChecked={true}
								/>
								<div className="ingredient-text">{data.originalString}</div>
							</div>
						))}
					</div>
					<div className="add-to-shopping-list-btn-cont">
						<button role="button" aria-label="shopping list" title="add" type="button" className="add-to-shopping-list-btn">
							Add to Shopping List
						</button>
					</div>
				</div>
			</div>
		</>
	)
};

export default RecipeContentDetails;
