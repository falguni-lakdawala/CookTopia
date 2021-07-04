import React from "react";
import FeatureCard from "./FeatureCard";
import searchRecipesImage from "../../../assets/illustrations/features-search-recipe.svg";
import nutritionInformationImage from "../../../assets/illustrations/features-nutrition-information.svg";
import featuresShoppingListImage from "../../../assets/illustrations/features-shopping-list.svg";

const Features = ({ features }) => {
	const featuresData = [
		{
			src: searchRecipesImage,
			title: "Find your favorite recipes",
			description: "Dive into CookTopia’s overflowing recipes by selecting multiple keywords. Be ready to choose your favorite-to-be dishes. Bon Appétit!",
			buttonText: "Search Recipes",
			type: 1
		},
		{
			src: nutritionInformationImage,
			title: "Nutrition discovery",
			description: "User can get the detailed analysis of the nutrition value they are consuming after selecting the recipe from Cooktopia.",
			buttonText: "Nutrition Information",
			type: 2
		},
		{
			src: featuresShoppingListImage,
			title: "Create your shopping list",
			description: "Once you picked the recipe you like, you can check the ingredients as well. After checking what ingredients you need, you can use our shopping list function to record your personal list in your profile. ",
			buttonText: "Shopping List",
			type: 1
		},
	];
  return (
    <div className="features-cont">
			<div className="max-width-cont">
				<div className="heading">
					<h3 role="heading" aria-label="Features">Features</h3>
				</div>
				<div className="features-listing">
					{
						featuresData.map((data, index) => {
							return (
								<FeatureCard
									key={ index }
									featuresData={ data }
								/>
							)
						})
					}
				</div>
			</div>
    </div>
  );
};

export default Features;
