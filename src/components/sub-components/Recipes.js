import RecipeCard from "./RecipeCard";

const Recipes = ({ recipeClassName }) => {
	const recipesData = [
		{
			src: "https://picsum.photos/400/300?random=5",
			title: "Italian Pasta",
			cooking_time: "45 minutes",
			category: "vegetables",
			alt: "image",
		},
		{
			src: "https://picsum.photos/400/300?random=6",
			title: "chicken Pizza",
			cooking_time: "120 minutes",
			category: "Non-veg",
			alt: "image",
		},
		{
			src: "https://picsum.photos/400/300?random=8",
			title: "chicken Biryani",
			cooking_time: "100 minutes",
			category: "veg",
			alt: "image",
		},
	];
  return (
    <div className="recipes-otd">
      <div className="heading">
        <h3>Recipes of Today</h3>
      </div>
      <div className="subheading">
        <p>
					<b>Try CookTopia's</b> daily <b>recommending dishes.</b>
				</p>
      </div>
			<div className="recipes-otd-listing">
				{
					recipesData.map((data, index) => {
						return (
							<RecipeCard
								key={ index }
								recipeData={ data }
							/>
						)
					})
				}
			</div>
			<div className="recipes-otd-load-more-btn-cont">
				<button className="recipes-otd-load-more-btn" type="button">
					load more
				</button>
			</div>
    </div>
  );
};

export default Recipes;
