import RecipeCard from "../RecipeCard";
import useFetch from '../../../custom_hooks/useFetch';


const Recipes = ({ recipeClassName }) => {

	const url = "http://localhost:5000/recipes/random";
	let recipesData = useFetch(url, {})

	return (
		<>
			{!recipesData.loading &&

				<>
					<div className="recipes-otd">
						<div className="max-width-cont">
							<div className="heading">
								<h3 role="heading" aria-label="Today's recipes">Recipes of Today</h3>
							</div>
							<div className="subheading">
								<p>
									<b aria-label="Cooktopia recommended ">Try CookTopia's</b> daily <b>recommended dishes.</b>
								</p>
							</div>
							<div className="recipes-otd-listing">
								{
									(recipesData.response.recipes).map((data, index) => {
										return (
											<RecipeCard
												key={index}
												recipeData={data}
											/>
										)
									})
								}
							</div>
							<div className="recipes-otd-load-more-btn-cont">
								<button role="button" aria-label="load more" title="load more" className="recipes-otd-load-more-btn" type="button">
									load more
								</button>
							</div>
						</div>
					</div>
				</>

			}
		</>

	);
}

export default Recipes;
